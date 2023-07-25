import React from 'react';
import '../styles/home.css';

const Home = () => {
  // Define the paragraphs as an array of objects
  const paragraphs = [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates consequatur nisi odio dolores inventore cum harum repudiandae atque asperiores deleniti adipisci soluta placeat minima cumque officiis impedit, quam libero laboriosam sunt. Ex labore soluta laboriosam laborum aliquam quisquam quidem, quod beatae atque minima, nemo eum odio velit laudantium asperiores odit reiciendis ipsa animi maiores! A maiores fugit voluptatum odio nostrum autem rem repellat? Quod unde fuga pariatur id in adipisci ex nam voluptate quis quos? Enim, quasi nemo! Obcaecati numquam at consectetur! Dolore ratione voluptatibus ipsam facilis?',
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates consequatur nisi odio dolores inventore cum harum repudiandae atque asperiores deleniti adipisci soluta placeat minima cumque officiis impedit, quam libero laboriosam sunt. Ex labore soluta laboriosam laborum aliquam quisquam quidem, quod beatae atque minima, nemo eum odio velit laudantium asperiores odit reiciendis ipsa animi maiores! A maiores fugit voluptatum odio nostrum autem rem repellat? Quod unde fuga pariatur id in adipisci ex nam voluptate quis quos? Enim, quasi nemo! Obcaecati numquam at consectetur! Dolore ratione voluptatibus ipsam.',
    },
  ];

  return (
    <div>
      <h2>Welcome to our page</h2>
      <div className="paraDiv">
        {/* Map over the paragraphs array to generate the paragraphs */}
        {paragraphs.map((paragraph) => (
          <p key={paragraph.id} className="paragraph">
            {paragraph.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
