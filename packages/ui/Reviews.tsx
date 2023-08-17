"use client";
import React from "react";

type Review = {
  id: string;
  author: string;
  rating: number;
  content: string;
};

type Reviews = {
  reviews: Review[];
};

export default async function Reviews() {
  const reviews: Review[] = [
    {
      id: "1",
      author: "John Doe",
      rating: 5,
      content:
        "Great product! I love the design and the quality is top-notch. Highly recommend!",
    },
    {
      id: "2",
      author: "Jane Smith",
      rating: 4,
      content:
        "Good product overall. The design is nice and the quality is good. The only downside is that it's a bit expensive.",
    },
    {
      id: "3",
      author: "Bob Johnson",
      rating: 3,
      content:
        "Decent product. The design is okay and the quality is average. Not the best value for the price.",
    },
  ];

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="border-b py-4">
          <div className="flex items-center mb-2">
            <p className="text-lg font-bold mr-4">{review.author}</p>
            <div className="flex">{/* Render rating stars here */}</div>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
}
