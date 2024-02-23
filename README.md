# SSAFE 3차 MISSION: 회원가입

이번 주부터 주니어 세션은 리드 세션에서 진행하는 프로젝트의 일부 기능들을 구현해보는 과제를 받게됩니다.

그 첫 번째는 **회원가입**입니다. 

이번 주 과제에서는 회원가입 시 유저에게 다양한 데이터를 받아 유효성 검사를 수행하는 방법과 간단한 리액트의 라우팅에 대해 학습하게됩니다.

아래 **필수 요구 사항을 모두 구현하는 것을 최우선으로 해주시고, 시간이 허락한다면 선택 요구사항을 구현**해주시면 됩니다.

하단 피그마 파일을 참고하여 과제를 수행합니다. 기능에 명세되어있지 않은 부분의 디자인은 구현해도되고, 하지않아도 됩니다.

## 기간

2월 22일(목) ~ 2월 29일(수) 오후 6시

## 제출 방법

[GitHub - SSA-FE/ssafe_signup](https://github.com/SSA-FE/ssafe_signup)

1. 위 레포를 자신의 레포지토리로 fork해 갑니다.
2. 이슈단위로 브랜치를 나누어 작업합니다.
3. 기능 내 세부 기능이 완료될 때마다 커밋을 진행합니다.
4. 작업이 모두 완료된 후 메인 레포지토리에 pull request를 전송합니다.

## 필수 요구사항

- <Home>, <SignUp> 두 페이지가 존재합니다. `react-router-dom`을 사용해서 **새로고침 없이 페이지 이동**을 구현해주세요.
    - Home에 회원가입 버튼을 누르면 SignUp페이지로 이동합니다.
    - 회원가입 완료되면 SignUp페이지에서 **알람**을 띄우고, Home으로 이동합니다.
- 필드가 포커스되면 **테두리 색이 변경**됩니다.
- 회원가입 데이터에 대해 **유효성 검사**를 진행합니다. 사용자에게 입력받는 정보는 ‘이메일, 비밀번호, 비밀번호 확인’로 총 3개의 데이터를 입력받습니다.
    - **이메일 정규식**을 사용하여 이메일 필드의 유효성을 검사합니다.
    - 비밀번호는 8자 이상 16자 이하의 문자열로 **하나 이상의 영문자와 하나 이상의 숫자, 하나 이상의 특수문자로 구성**되어야합니다.
    - 비밀번호 확인은 **비밀번호와 일치**해야합니다.
- 유효하지않은 값을 입력하면 각각의 필드 하단에 실시간으로 적절한 에러메세지를 출력합니다.
- 유효한 값이 입력되면 **입력받은 데이터를 alert**로 띄우고 메인페이지로 이동합니다.

## 선택 요구사항

- 비밀번호 필드는 ‘뜬 눈 아이콘’을 누르면 작성한 값이 보입니다. ‘감은 눈 아이콘’을 누르면 입력한 비밀번호가 암호로 표시됩니다.
- 모두 유효한 값을 입력하면 비활성화 되어있던 하단의 회원가입 버튼의 색깔이 변하고 활성화됩니다.

## 제한 사항

- 라이브러리 사용에 제한이 없습니다. 직접 구현해도 좋고, `react-hook-form` ,  `formik`등의 라이브러리를 적극적으로 사용하셔도 좋습니다.

## 피그마

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqPkpeKdpI5NQs12FzEJ3K0%2F%EC%A3%BC%EB%8B%88%EC%96%B4%EA%B3%BC%EC%A0%9C---%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%3Ftype%3Ddesign%26node-id%3D0%3A1%26mode%3Ddesign%26t%3DGnntKO2padQDg6GU-1](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FqPkpeKdpI5NQs12FzEJ3K0%2F%EC%A3%BC%EB%8B%88%EC%96%B4%EA%B3%BC%EC%A0%9C---%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%3Ftype%3Ddesign%26node-id%3D0%3A1%26mode%3Ddesign%26t%3DGnntKO2padQDg6GU-1)

[https://github.com/SSA-FE/ssafe_signup](https://github.com/SSA-FE/ssafe_signup)
