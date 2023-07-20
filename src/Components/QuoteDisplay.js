import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=love',
          {
            headers: { 'X-Api-Key': 'm6+oktDI+9ofBaW46OFZUg==XeGtvBpWClXb5LuK' },
          },
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <h1 className="Random Love Quote">Loading ...</h1>;
  }

  if (error || !quote) {
    return <h1 className="Random Love Quote">Something went wrong, please try again</h1>;
  }

  return (
    <section className="Random Love Quote">
      <h1 className="Random Love Quote">{quote}</h1>
    </section>
  );
};

export default QuoteDisplay;
