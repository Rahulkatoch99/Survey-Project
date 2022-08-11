import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

export const Section2 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <h2>
              How it
              <span>works</span>
            </h2>
            <p>
              You are three steps away from earning exciting rewards, vouchers,
              and money.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div>
              <div className="text-center">
                <AssignmentIcon />
              </div>
              <div>
                <h3>Register Free</h3>
              </div>
              <div>
                <p>
                  Just a few basic details will help us send the right survey to
                  you
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div>
              <div className="text-center">
                <LocalLibraryIcon />
              </div>
              <div>
                <h3>Participate in surveys</h3>
              </div>
              <div>
                <p>
                  Let us know what you think about brands, products, or
                  services, and influence your world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div>
              <div className="text-center">
                <CurrencyBitcoinIcon />
              </div>
              <div>
                <h3>Get rewarded</h3>
              </div>
              <div>
                <p>
                  Your time spent on the surveys earn you exciting rewards like
                  cash and shopping vouchers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
