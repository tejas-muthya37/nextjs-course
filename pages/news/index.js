import Link from "next/link";

function NewsPage() {
  return (
    <div className="news-page">
      <h1>The News Page</h1>
      <Link href="/news/1">
        <ul>News article 1</ul>
      </Link>
      <ul>News article 2</ul>
      <ul>News article 3</ul>
      <ul>News article 4</ul>
    </div>
  );
}

export default NewsPage;
