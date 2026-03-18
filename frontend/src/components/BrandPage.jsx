import React from "react";
import { brandPageStyles } from "../assets/dummyStyles";
import { useNavigate, useParams } from "react-router-dom";
import watchesData from "../assets/CategoriesHomedata";
import { useCart } from "../CartContext";
import { ArrowLeft } from "lucide-react";

const BrandPage = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const bramdWatches = watchesData[brandName?.toLocaleLowerCase()] || [];
  const { addItem } = useCart();
  return (
    <div className={brandPageStyles.mainContainer}>
      <div className="max-w-7xl mx-auto relative">
        <div className={brandPageStyles.headerContainer}>
          <div className={brandPageStyles.backButtonContainer}>
            <button
              className={brandPageStyles.backButton}
              onClick={() => navigate(-1)}
            >
              <div className={brandPageStyles.backIconContainer}>
                <ArrowLeft size={20} />
              </div>
              <span className={brandPageStyles.backText}>Back</span>
            </button>
          </div>
          <div className={brandPageStyles.titleContainer}>
            <h1 className={brandPageStyles.title}>{brandName} Collections</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
