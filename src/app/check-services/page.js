"use client";
import React from "react";
import Modal from "../components/Modal";
import LinkButton from "../components/LinkButton";
import DefaultButton from "../components/DefaultButton";

export default function CheckServices() {
  // State hooks to control the visibility of the modals
  const [isSurgeryCostModalOpen, setIsSurgeryCostModalOpen] =
    React.useState(false);
  const [isInsuranceCoverageModalOpen, setIsInsuranceCoverageModalOpen] =
    React.useState(false);

  return (
    <>
      <div className="mt-4">
        <LinkButton navigateTo="/" label="Dashboard" />
      </div>
      <div className="flex gap-4 items-center justify-center mb-8">
        <DefaultButton
          label="Check Surgery Cost"
          clickHandler={() => {
            setIsSurgeryCostModalOpen(true);
            setIsInsuranceCoverageModalOpen(false);
          }}
        />
        <DefaultButton
          label="Check Insurance Coverage"
          clickHandler={() => {
            setIsInsuranceCoverageModalOpen(true);
            setIsSurgeryCostModalOpen(false);
          }}
          className="text-white !bg-blue-700 hover:!bg-blue-800"
        />
        {/* Modal to check surgery cost */}
        <Modal
          isOpen={isSurgeryCostModalOpen}
          setIsOpen={setIsSurgeryCostModalOpen}
          modalHeading="Check Surgery Cost"
          buttonLable="Check Now"
          queryType="surgery"
        />
        {/* Modal to check insurance coverage */}
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
