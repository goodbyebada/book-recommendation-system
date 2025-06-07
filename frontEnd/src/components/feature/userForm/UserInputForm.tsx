import React, { useState, useEffect } from "react";
import GenderForm from "@components/formItems/GenderForm";
import PatronTypeSelector from "@components/formItems/EducationSelector";
import Department from "@components/formItems/Department";
import { useRouter } from "next/navigation";
import { inputData } from "@utils/model/interfaceModel";
import { startYear, endYear } from "@components/formItems/ExtendedDropdown";

import ExtendedDropdown from "@components/formItems/ExtendedDropdown";
import { checkformData } from "@utils/model/interfaceModel";
import { departments } from "@data/patron";
import { patronType1departments, patronType2departments } from "@data/patron";
import { useAladin } from "@data/const";

const EMPTY_STRING = "";
const DEFAULT_GENDER = "F";
const DEFAULT_PATORN_ID = 1;
const TEST_BIRTH = parseInt("1990");

// [ ] natve 연결 추가해야함 🚨

/**
 * Test를 위한 Form
 * @returns
 */
function setInputForm(key: keyof typeof testDataObj) {
  enum Department {
    ComputerScience = "컴퓨터학부",
    Business = "경영학부",
  }

  const testDataObj: { [key: string]: inputData } = {
    CSdata: {
      gender: "F",
      patron_type: 1,
      birthdate: TEST_BIRTH,
      department: Department.ComputerScience,
    },

    BSdata: {
      gender: "F",
      patron_type: 1,
      birthdate: TEST_BIRTH,
      department: Department.Business,
    },

    SET: {
      gender: DEFAULT_GENDER,
      patron_type: DEFAULT_PATORN_ID,
      birthdate: 0,
      department: EMPTY_STRING,
    },
  };

  return testDataObj[key];
}

const bookList = "/bookList";
const routeUrl = bookList;

const UserInputForm = () => {
  const [formData, setFormData] = useState<inputData>(
    // setInputForm("CSdata")
    // setInputForm("BSdata")
    setInputForm("SET")
  );

  const router = useRouter();

  const [checkComponent, setCheckComponent] = useState<checkformData>({
    birthdateCheck: true,
    departmentCheck: true,
    patronCheck: true,
  });

  // 객체 프로퍼티를 2개를 만들어 그 값을 변경한다..!

  /**
   *
   * @param data user 정보  { gender, patron_type, birthdate, department }
   * @returns queryString
   */
  const returnQueryString = (data: inputData) => {
    let { gender, patron_type, birthdate, department } = data;

    if (patronType1departments.includes(department)) {
      patron_type = 1;
    }
    if (patronType2departments.includes(department)) {
      patron_type = 2;
    }

    const queryString = `gender=${gender}&patron_type=${patron_type}&birthdate=${birthdate}&department=${department}`;
    return queryString;
  };

  //공백임을 체크한다
  const checkSubmitCondition = () => {
    const isFormComplete = Object.values(formData).every(
      (field) => field !== ""
    );
    // ture여야지 조건통과

    // 모든 조건 통과 로직
    const checkAlltheInput = (formData: inputData) => {
      const { gender, patron_type, birthdate, department } = formData;
      return (
        gender !== EMPTY_STRING &&
        startYear <= birthdate &&
        birthdate <= endYear &&
        department !== EMPTY_STRING &&
        departments.includes(department)
      );
    };

    const submitcheckValueToChildComponent = (
      fieldName: string,
      value: boolean
    ) => {
      setCheckComponent((prevData: checkformData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    };

    // 둘 다 적절하고 && 공백이 아니라면
    /**
     * // birthdate만 부적절하다면, (공백포함+ 조건 만족 X)
    // deparntment만 부적절하다면, (공백포함+ 조건 만족 X)
     * 
     */

    // 공백이 아니고 올바른 조건이라면
    if (isFormComplete && checkAlltheInput(formData)) {
      // RN으로 넘길 때
      if (typeof window !== "undefined" && window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify(formData));
        return;
      }

      const queryString = returnQueryString(formData);
      router.push(routeUrl + "?" + queryString);
      return;
    }

    if (!(startYear <= formData.birthdate && formData.birthdate <= endYear)) {
      submitcheckValueToChildComponent("birthdateCheck", false);
    }
    if (
      formData.department === EMPTY_STRING ||
      !departments.includes(formData.department)
    ) {
      submitcheckValueToChildComponent("departmentCheck", false);
    }
  };

  const handleInputChange = (fieldName: string, value: string | number) => {
    setFormData((prevData: inputData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <>
      <div className="select-template">
        <GenderForm onChange={(value) => handleInputChange("gender", value)} />
        <PatronTypeSelector
          onChange={(value) => handleInputChange("patron_type", value)}
        />

        <ExtendedDropdown
          onChange={(value) => handleInputChange("birthdate", value)}
          checkComponent={checkComponent}
        />

        <Department
          onChange={(value) => handleInputChange("department", value)}
          checkComponent={checkComponent}
        />

        <button
          type="button"
          id="btn"
          className="button btnPush btnLightBlue"
          onClick={checkSubmitCondition}
        >
          제출
        </button>
      </div>
    </>
  );
};

export default UserInputForm;
