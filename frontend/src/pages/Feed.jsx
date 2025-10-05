import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import Loading from "../components/Loading";
import Stories from "../components/Stories";

const feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and post list */}
      <div>
        <Stories />
        <div className="p-4 space-y-6">List of post</div>
      </div>

      {/* Right Sidebar  */}
      <div>
        <div>
          <h1>Sponserd</h1>
        </div>
        <h1>recent messages</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default feed;
