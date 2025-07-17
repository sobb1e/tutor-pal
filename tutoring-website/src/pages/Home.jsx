import '../App.css';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="container">
          <h1>Slogan</h1>
          <p>Grade 8-12 subjects taught by expert tutors</p>
          <button className="cta-button">Book a Session</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature-card">
            <h3>Subjects</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore fugit excepturi veritatis. Eligendi quis vel quo aliquid voluptatem mollitia aperiam rerum autem, ullam nihil laudantium quas! Veritatis, saepe voluptatem?</p>
          </div>
          <div className="feature-card">
            <h3>Language Support</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate asperiores amet laboriosam delectus neque numquam distinctio magnam error voluptatibus, et commodi corporis tempore officia blanditiis doloremque natus cum aliquid!</p>
          </div>
          <div className="feature-card">
            <h3>Exam Prep</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus ea perferendis dignissimos sunt quae neque provident nam tempora officia aperiam debitis, eaque magni eveniet ipsa qui, eligendi exercitationem. Maxime!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;