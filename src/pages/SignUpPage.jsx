import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  // 유효성 검사
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;

  const onSubmit = (data) => console.log(data.required);

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

      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="PW(영문, 숫자, 특수문자 포함 8자 ~ 16자)"
        {...register("password", {
          required: true,
          pattern: passwordRegex,
        })}
      />
      {errors.password && errors.password.type === "required" && (
        <p>비밀번호를 입력해주세요</p>
      )}
      {errors.password && errors.password.type === "pattern" && (
        <p>
          영문자, 숫자, 특수문자를 하나 이상 포함한 8자리 이상, 16자리 이하의
          비밀번호여야 합니다.
        </p>
      )}

      <label htmlFor="passwordCheck">비밀번호 확인</label>
      <input
        id="passwordCheck"
        type="password"
        placeholder="비밀번호 확인"
        {...register("passwordCheck", {
          required: "비밀번호를 확인해주세요",
          validate: {
            matchPassword: (value) => {
              const { password } = getValues();
              return password === value || "비밀번호가 일치하지 않습니다";
            },
          },
        })}
      />
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}

      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUpPage;
