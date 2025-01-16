"use client";
import React from "react";
import LinkButton from "../components/LinkButton";
import DefaultButton from "../components/DefaultButton";
import Modal from "../components/Modal";
import ServiceForm from "./ServiceForm";

export default function CheckServices() {
  // State hooks to control the visibility of the modals
  const [isSurgeryCostModalOpen, setIsSurgeryCostModalOpen] =
    React.useState(false);
  const [isInsuranceCoverageModalOpen, setIsInsuranceCoverageModalOpen] =
    React.useState(false);
  const [isSubmissionSuccessfull, setIsSubmissionSuccessfull] =
    React.useState(false);
  return (
    <>
      <div className="mt-4">
        <LinkButton navigateTo="/" label="Dashboard" />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-6 items-center justify-center mb-8 px-4 sm:px-8 mt-6">
        <DefaultButton
          label="Check Surgery Cost"
          clickHandler={() => {
            setIsSurgeryCostModalOpen(true);
            setIsInsuranceCoverageModalOpen(false);
            setIsSubmissionSuccessfull(false);
          }}
          className="w-full sm:w-auto mb-4 sm:mb-0 max-w-xs"
        />
        <DefaultButton
          label="Check Insurance Coverage"
          clickHandler={() => {
            setIsInsuranceCoverageModalOpen(true);
            setIsSurgeryCostModalOpen(false);
            setIsSubmissionSuccessfull(false);
          }}
          className="text-white !bg-blue-700 hover:!bg-blue-800 w-full sm:w-auto max-w-xs"
        />
        <Modal
          isOpen={isSurgeryCostModalOpen}
          setIsOpen={setIsSurgeryCostModalOpen}
          modalHeading="Check Surgery Cost"
        >
          <ServiceForm
            queryType="surgery"
            buttonLable="Check Now"
            setIsSubmissionSuccessfull={setIsSubmissionSuccessfull}
            isSubmissionSuccessfull={isSubmissionSuccessfull}
          />
        </Modal>
        <Modal
          isOpen={isInsuranceCoverageModalOpen}
          setIsOpen={setIsInsuranceCoverageModalOpen}
          modalHeading="Check Insurance Coverage"
        >
          <ServiceForm
            queryType="insurance"
            buttonLable="Check Coverage"
            setIsSubmissionSuccessfull={setIsSubmissionSuccessfull}
            isSubmissionSuccessfull={isSubmissionSuccessfull}
          />
        </Modal>
      </div>
    </>
  );
}
