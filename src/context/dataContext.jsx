import { createContext, lazy, useEffect, useState } from "react";
import qs from 'qs';
const Loader = lazy(() => import("../components/Loader"));


export const DataContext = createContext();

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const DataProvider = ({ children, employeeName }) => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const query = qs.stringify(
  //   {
  //     populate: ["bio", "skills", "skillBreakdown", "skillBreakdown.tech", "projects", "projects.techStack", "projects.details", "recommendations", "education", "education.location", "socialLinks"],
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   }
  // );
  const query = qs.stringify(
    {
      populate: {
        avatar: true,
        skills: true,
        skillBreakdown: {
          populate: {
            tech: {
              populate: ['logo'],
            },
          },
        },
        projects: {
          populate: {
            techStack: true,
            projectImage: true,
            feature: {
              populate: ['logo'],
            },
            problem: true,
            solution: true,
            link: {
              populate: ['logo'],
            },
            mockupsVideo: {
              populate: ["tabletMockupVideo", "laptopMockupVideo", "mobileMockupVideo", "iosMockupVideo"]
            }
          },
        },
        recommendations: true,
        education: {
          populate: {
            location: true,
          },
        },
        socialLinks: true,
        stats: true,
        profile: true,
        projectStats: true,
        categories:true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );



  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(`${BASE_URL}/api/portfolios?${query}&filters[slug][$eq]=${employeeName}`)
  //       const data = await response.json();
  //       if (data?.data[0]) {
  //         setPortfolioData(data?.data[0]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
  //     }
  //   };
  //   if (!portfolioData || portfolioData.length === 0) {
  //     fetchData();
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/api/portfolios?${query}&filters[slug][$eq]=${employeeName}`
        );
        const data = await response.json();
        if (data?.data?.[0]) {
          setPortfolioData(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000); // Optional delay for loading effect
      }
    };

    // Only call fetch if portfolioData is not already set
    if (!portfolioData || Object.keys(portfolioData).length === 0) {
      fetchData();
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <DataContext.Provider value={{ portfolioData, loading }}>
      {children}
    </DataContext.Provider>
  );
};
