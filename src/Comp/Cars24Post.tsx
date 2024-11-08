import React, { useEffect, useMemo, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function Cars24Post() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [paginationData, setPaginationData] = useState({
    currentPg: 1,
    limit: 5,
    totalPg: 0,
  });

  const [shouldRefreshedAt, setShouldRefreshedAt] = useState(null);

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const apiResp = await fetch("https://jsonplaceholder.typicode.com/posts");
      const finalResp = await apiResp.json();
      setPaginationData((prev) => ({
        ...prev,
        totalPg: Math.ceil(finalResp.length / prev.limit),
      }));
      setData(finalResp);
      const now = new Date();
      const newData = new Date(now.getTime() + 60 * 1000);
      setShouldRefreshedAt(newData);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  const prevFunc = () => {
    setPaginationData((prev) => ({
      ...prev,
      currentPg: prev.currentPg > 1 ? prev.currentPg - 1 : prev.currentPg,
    }));
  };

  const nextFunc = () => {
    setPaginationData((prev) => ({
      ...prev,
      currentPg:
        prev.currentPg < prev.totalPg ? prev.currentPg + 1 : prev.currentPg,
    }));
  };

  console.log(paginationData);

  const filteredData = useMemo(() => {
    let { currentPg, limit } = paginationData;
    return data.slice((currentPg - 1) * limit, currentPg * limit);
  }, [paginationData]);

  const refreshDataFunc = () => {
    const now = new Date();
    if (shouldRefreshedAt && now < shouldRefreshedAt) {
        const secondsLeft = Math.ceil((shouldRefreshedAt.getTime() - now.getTime()) / 1000);
        alert(`Data is fresh. Please try to refresh in ${secondsLeft} seconds.`);
    } else {
        fetchPost();
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>cars 24 post</h1>
      <div  style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}>
      <button  onClick={refreshDataFunc}>Refresh Data</button>
      </div>
  
      <table
        border={1}
        style={{ width: "90%", margin: "auto", padding: "10px" }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {!isLoading
            ? filteredData?.map((elm, ix) => (
                <tr key={ix}>
                  <td>{elm.id}</td>
                  <td>{elm.userId}</td>
                  <td>{elm.title}</td>
                  <td>{elm.body}</td>
                </tr>
              ))
            : "Fetching the Post...."}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          gap:"10px"
        }}
      >
        <button onClick={prevFunc}>Prev</button>
        {paginationData.currentPg} of {paginationData.totalPg}
        <button onClick={nextFunc}>Next</button>
      </div>
    </div>
  );
}

export default Cars24Post;
