"use client";
import React from "react";
import "./style.css";
import LocationIcon from "@/assets/logos/location";
import { FoodCardItem } from "@/interface/food";

export const FoodCard = ({ data }: { data: FoodCardItem }) => {
  return (
    <div className="box">
      <div className="element-wrapper">
        <div
          className="element"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="fire-water">
            <div className="overlap">
              <div className="rectangle">
                <div className="rectangle2">
                  <h1 className="text-wrap">{data.name}</h1>
                  <p className="we-are-all-about-we">{data.description}</p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <LocationIcon className="vector" />
                    <div className="div">
                      <p>{data.location}</p>
                    </div>
                  </div>
                </div>

                <div className="btn-container">
                  <button className="book-now-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
