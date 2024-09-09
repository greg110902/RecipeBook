"use client";

function Card({ image_url, title, description, recipe_id }) {
  return (
    <div>
      <a
        className="card bg-base-100 w-96 shadow-xl m-10 hover:bg-gray-100 hover:scale-105"
        href={`/recipes/${recipe_id}`}
      >
        <figure>
          <img src={image_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-center">{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
