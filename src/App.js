import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) {
      return;
    }
    setFollowers(data[page]);
  }, [loading, page, data]);

  const prevPage = () => {
    setPage((oldPage) => {
      let backward = oldPage - 1;
      if (backward < 0) {
        backward = data.length - 1;
      }
      return backward;
    });
  };
  const nextPage = () => {
    setPage((newPage) => {
      let forward = newPage + 1;
      if (forward > data.length - 1) {
        forward = 0;
      }
      return forward;
    });
  };
  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
