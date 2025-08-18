import React from 'react';
import '../App.css';

const Referrals = () => {
  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Referrals Program
          </h1>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 border border-white/20">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                Coming Soon
              </h2>
              <p className="text-lg text-white/80 mb-8">
                We're working on an exciting referrals program that will reward you for helping others achieve their UK immigration goals.
              </p>
              <div className="text-white/60">
                <p className="mb-4">Stay tuned for:</p>
                <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
                  <li>Generous referral rewards</li>
                  <li>Easy tracking system</li>
                  <li>Multiple ways to refer</li>
                  <li>Exclusive benefits for top referrers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;