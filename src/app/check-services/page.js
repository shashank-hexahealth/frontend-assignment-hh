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
      <div className="flex gap-4 items-center justify-center mb-8">
        <DefaultButton
          label="Check Surgery Cost"
          clickHandler={() => {
            setIsSurgeryCostModalOpen(true);
            setIsInsuranceCoverageModalOpen(false);
            setIsSubmissionSuccessfull(false);
          }}
        />
        <DefaultButton
          label="Check Insurance Coverage"
          clickHandler={() => {
            setIsInsuranceCoverageModalOpen(true);
            setIsSurgeryCostModalOpen(false);
            setIsSubmissionSuccessfull(false);
          }}
          className="text-white !bg-blue-700 hover:!bg-blue-800"
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
