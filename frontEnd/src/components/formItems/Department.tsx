// Department.tsx
import React, { useState, useEffect } from "react";
import { departments } from "@data/patron";
import { checkformData } from "@utils/model/interfaceModel";

const Department = ({
  onChange,
  checkComponent,
}: {
  onChange: (value: string) => void;
  checkComponent: checkformData;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [matchedDepartments, setMatchedDepartments] = useState<string[]>([]);
  const [check, setCheck] = useState<boolean>(true);
  const [alertSetence, setAlertSentence] = useState("");

  const { departmentCheck } = checkComponent;

  useEffect(() => {
    setCheck(departmentCheck);
    alertSetence === "" ? setAlertSentence("전공을 다시 확인해주세요") : "";
  }, [departmentCheck]);

  const alertChecktoValidValue = () => {
    const input = document.getElementById("floatingInputValue-2");

    if (!check) {
      input?.classList.add("invalid");
    } else {
      if (input?.classList.contains("invalid"))
        input?.classList.remove("invalid");
    }
  };

  useEffect(alertChecktoValidValue, [check]);

  // 주어진 학과 중 선택했을 시
  const selectSuggestionDepartmentItem = (selectedDepartment: string) => {
    setCheck(true);
    setInputValue(selectedDepartment);
    // input란에 선택한 departement로

    setMatchedDepartments([]);
    // list-group-container를 비운다.

    onChange(selectedDepartment);
    // 부모 컴포넌트에 선택한 전공 전달
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    const valueToShow = e.target.value;

    // 입력을 완벽히 했을 시,
    if (departments.includes(value)) {
      selectSuggestionDepartmentItem(value);
      return;
    }

    setCheck(false);
    setInputValue(valueToShow);
    onChange(valueToShow);

    const matched = departments.filter((department) =>
      department.includes(value)
    );
    setMatchedDepartments(matched);
  };

  /** 클릭했을때 일어나는 이벤트이다. */
  const handleDepartmentClick = (department: string, index: number) => {
    selectSuggestionDepartmentItem(department);
  };

  /**엔터시 자동완성되는 함수이다. */
  const autoCompletion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 현재 list-group-containerd안에 있는 맨 첫번째 학과 이름을 inputValue로 설정한다. 넣는다.

    /**
     * 컴퓨터학
     * 컴퓨터학부 하나밖에 뜨지 않는경우
     */
    if (matchedDepartments.length == 1) {
      let department = matchedDepartments[0];
      selectSuggestionDepartmentItem(department);
      return;
    }

    if (matchedDepartments.includes(inputValue)) {
      /**
       *  경영학과 입력시  matchedDepartments 경영학과 / 스포츠 경영학과 어쩌구 중에서 글자 정확히 일치하는것만
       *  폼 제출시 입력된다.
       */
      let department = matchedDepartments.find(
        (departement) => departement === inputValue
      );
      if (department) {
        selectSuggestionDepartmentItem(department);
      }
    }

    return;

    // list-group-container를 없앤다.
  };

  return (
    <div className="department-component">
      {check ? "" : <p className="invalid-notice">{alertSetence}</p>}
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => autoCompletion(e)}
        className="form-floating"
      >
        <input
          type="text"
          className="form-control"
          id="floatingInputValue-2"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label htmlFor="floatingInputValue">전공을 입력하세요</label>

        {/* 예시항목  list-group-container */}
        <div className={`list-group-container`}>
          <ul className="list-group">
            {matchedDepartments.map((department, index) => (
              <li
                key={index}
                className={`list-group-item`}
                onClick={() => handleDepartmentClick(department, index)}
              >
                {department}
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Department;
