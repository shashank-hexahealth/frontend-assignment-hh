"use client";
import React from "react";
import Link from "next/link";
import Modal from "../components/Modal";

export default function CheckServices() {
  const [isSurgeryCostModalOpen, setIsSurgeryCostModalOpen] =
    React.useState(false);
  const [isInsuranceCoverageModalOpen, setIsInsuranceCoverageModalOpen] =
    React.useState(false);

  return (
    <>
      <div className="mt-4">
        <Link
          href="/"
          className="bg-red-100 hover:bg-red-200 px-5 py-2.5 rounded-lg"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center mb-8">
        <button
          className="bg-cyan-300 hover:bg-cyan-400 rounded-lg px-5 py-2.5 text-center"
          onClick={() => {
            setIsSurgeryCostModalOpen(true);
            setIsInsuranceCoverageModalOpen(false);
          }}
        >
          Check Surgery Cost
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-5 py-2.5 text-center"
          type="button"
          onClick={() => {
            setIsInsuranceCoverageModalOpen(true);
            setIsSurgeryCostModalOpen(false);
          }}
        >
          Check Insurance Coverage
        </button>
        <Modal
          isOpen={isSurgeryCostModalOpen}
          setIsOpen={setIsSurgeryCostModalOpen}
          modalHeading="Check Surgery Cost"
          buttonLable="Check Now"
          queryType="surgery"
        />
        <Modal
          isOpen={isInsuranceCoverageModalOpen}
          setIsOpen={setIsInsuranceCoverageModalOpen}
          modalHeading="Check Insurance Coverage"
          buttonLable="Check Coverage"
          queryType="insurance"
        />
      </div>
    </>
  );
}
