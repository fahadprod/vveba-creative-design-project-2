"use client";

const customers = [
  {
    name: "Jane Lee",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!",
    rating: 4.5,
    image: "images/customer-img-1.jpg",
  },
  {
    name: "Bob Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!",
    rating: 5,
    image: "images/customer-img-2.jpg",
  },
  {
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!",
    rating: 4,
    image: "images/customer-img-3.jpg",
  },
];

function getStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
  }

  if (hasHalf) {
    stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
  }

  while (stars.length < 5) {
    stars.push(<i key={`empty-${stars.length}`} className="far fa-star"></i>);
  }

  return stars;
}

export default function Customers() {
  return (
    <section className="section-2" id="customers">
      <h1 className="section-heading">Customers</h1>
      <div className="customers-wrapper">
        {customers.map((customer, index) => (
          <div className="customer" key={index}>
            <i className="fas fa-quote-left"></i>
            <p className="customer-text">{customer.text}</p>
            <div className="customer-rating">{getStars(customer.rating)}</div>
            <img src={customer.image} className="customer-img" alt={customer.name} />
            <h4 className="customer-name">{customer.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
