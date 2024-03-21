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

export default function Reviews() {
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
    {
      id: "4",
      author: "John Doe",
      rating: 5,
      content:
        "Great product! I love the design and the quality is top-notch. Highly recommend!",
    },
    {
      id: "5",
      author: "Jane Smith",
      rating: 4,
      content:
        "Good product overall. The design is nice and the quality is good. The only downside is that it's a bit expensive.",
    },
    {
      id: "6",
      author: "Bob Johnson",
      rating: 3,
      content:
        "Decent product. The design is okay and the quality is average. Not the best value for the price.",
    },
  ];

  return (
    <div className="bg-[#fcb128] flex p-4">
      <div className="review-changing-section w-1/3 flex flex-col justify-between items-start">
        <h3 className="uppercase text-5xl font-bold text-[#0c183c]">
          30,000 happy drinkers and counting
        </h3>
      </div>

      <div
        className="flex gap-4 overflow-auto hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // @ts-ignore
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border p-6 bg-white rounded-md shadow flex-none w-64"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-bold">{review.author}</p>
              <div className="flex">{/* Render rating stars here */}</div>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
