import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const sources = [
    {
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.callcentrehelper.com/feed",
      tag: "Call Centre",
    },
    {
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://martech.zone/feed",
      tag: "Marketing",
    },
    {
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.feedburner.com/Marketingland",
      tag: "Affiliate",
    },
  ];

  const fallbackImage = "/assets/images/blogbg.jpeg";


  const extractImage = (desc, fallback) => {
    const match = desc?.match(/<img[^>]+src="?([^"\s]+)"?[^>]*\/?>/);
    return match?.[1] || fallback;
  };

  useEffect(() => {
    Promise.all(
      sources.map((src) =>
        fetch(src.url)
          .then((res) => res.json())
          .then((res) =>
            res.items
              ? res.items.map((item) => ({
                  title: item.title,
                  date: item.pubDate,
                  image:
                    item.thumbnail ||
                    extractImage(item.description, fallbackImage),
                  snippet: item.description
                    .replace(/<[^>]+>/g, "")
                    .slice(0, 160),
                  tag: src.tag,
                  link: item.link,
                }))
              : []
          )
          .catch(() => [])
      )
    ).then((results) => {
      const merged = results.flat();
      const sorted = merged
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 12);
      setPosts(sorted);
      setLoading(false);
    });
  }, []);

  return (
    <section className="blog-section py-5 mt-custom pt-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Insights & Industry Trends</h2>
          <p className="text-muted">
            Stay ahead with expert insights from{" "}
            <span className="text-warning">SKYCONNECT NEXUS</span>
          </p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row className="gy-4">
            {posts.map((post, idx) => (
              <Col md={4} sm={6} xs={12} key={idx}>
                <Card className="blog-card border-0 shadow-sm h-100 overflow-hidden">
                  <Card.Img
  variant="top"
  src={post.image}
  alt={post.title}
  className="blog-img"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  }}
/>

                  <Card.Body className="d-flex flex-column">
                    <Badge
                      bg="warning"
                      text="dark"
                      className="mb-2 align-self-start"
                    >
                      {post.tag}
                    </Badge>
                    <Card.Title className="fw-semibold fs-5 text-dark">
                      {post.title}
                    </Card.Title>
                    <Card.Text className="text-muted small mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </Card.Text>
                    <Card.Text className="text-muted flex-grow-1">
                      {post.snippet}
                    </Card.Text>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm mt-3 align-self-start"
                    >
                      Read More →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Blog;
