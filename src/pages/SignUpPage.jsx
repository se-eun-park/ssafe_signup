import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // 유효성 검사
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;

  const onSubmit = (form) => console.log(form.required);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: emailRegex,
        })}
      />
      {errors.email && errors.email.type === "required" && (
        <p>이메일을 입력해주세요</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p>이메일 양식에 맞게 입력해주세요</p>
      )}

      <label htmlFor="pw">비밀번호</label>
      <input
        id="pw"
        type="password"
        placeholder="PW"
        {...register("pw", {
          required: true,
          minLength: 8,
        })}
      />
      {errors.pw && errors.pw.type === "required" && (
        <p>비밀번호를 입력해주세요</p>
      )}
      {errors.pw && errors.pw.type === "minLength" && (
        <p>
          영문자, 숫자, 특수문자를 하나 이상 포함한 8자리 이상 16자리 이하의
          비밀번호여야 합니다.
        </p>
      )}
    </form>
  );
};

export default SignUpPage;
