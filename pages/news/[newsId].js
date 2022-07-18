import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <div className="detail-page">
      <h1>The Detail Page - {newsId}</h1>
    </div>
  );
}

export default Detail;
