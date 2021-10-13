import React from 'react';
import faImage from '../../assets/img/2fa.png';
import pmImage from '../../assets/img/pm.png';
import { GeneratePasswordForm } from '../../components/GeneratePasswordForm/GeneratePasswordForm';

export function GeneratePassword() {
  return (
    <main className="text-black dark:text-lightgray">
      <div className="container py-20">
        <GeneratePasswordForm />
      </div>
      <div className="bg-lightgray dark:bg-darkgray">
        <div className="container py-20">
          <h2 className="text-3xl font-bold text-center mb-20">
            강력한 비밀번호란 무엇일까?
          </h2>
          <div className="grid grid-cols-1 gap-y-20">
            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-x-20">
              <div className="mb-10 md:mb-0">
                <img
                  className="w-full"
                  src="https://i.ibb.co/6BC3BJj/notebook.png"
                  alt="비밀번호 필드와 함께 자물쇠가 표시된 노트북있는 그림"
                />
              </div>
              <div className="">
                <h3 className="text-2xl mb-4 font-semibold">
                  강력한 비밀번호란?
                </h3>
                <p className="text-lg">
                  강력한 비밀번호는 고유하고 무작위로 생성된 것입니다. 사람은 이
                  중 하나를 충족하는 비밀번호를 만드는 것도 쉽지 않습니다.
                  데이터 보안 침해 사건의 81%는 취약하거나 재사용된 비밀번호로
                  인하여 발생합니다.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-x-20">
              <div className="">
                <h3 className="text-2xl font-semibold mb-4">
                  강력한 비밀번호의 조건
                </h3>
                <ul className="text-lg">
                  <li className="py-1">
                    <strong>긴 암호:</strong> 암호는 길수록 안전합니다. 강력한
                    암호는 12자 이상이어야 합니다.
                  </li>
                  <li className="py-1">
                    <strong>임의성:</strong> 강력한 암호는 문자, 숫자, 대소문자,
                    기호의 조합을 사용하여 단어나 이름과 유사하지 않은 예측
                    불가능한 문자열을 형성합니다.
                  </li>
                  <li className="py-1">
                    <strong>고유성:</strong> 강력한 암호는 계정마다 고유해야
                    해킹 시 취약성을 줄일 수 있습니다.
                  </li>
                </ul>
              </div>
              <div className="mb-10 md:mb-0">
                <img
                  className="w-full"
                  src="https://i.ibb.co/FBszvQ3/Password.png"
                  alt="무작위로 생성된 세 개의 비밀번호가 있는 그림"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20">
        <h2 className="text-center text-3xl font-bold mb-20">
          더 안전하게 계정을 보호하는 방법
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-black">
          <div className="card bg-yellow">
            <a
              className="block p-8 cursor-pointer "
              href="https://ko.wikipedia.org/wiki/다요소_인증"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-2xl font-semibold mb-4">이중인증</h3>
              <img
                className="m-auto"
                src={faImage}
                alt="세명의 사람이 각자의 휴대폰 또는 컴퓨터를 하고 있는 그림"
              />
            </a>
          </div>
          <div className="card bg-blue">
            <a
              className="block p-8 cursor-pointer"
              href="https://www.cnet.com/tech/services-and-software/best-password-manager/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-2xl font-semibold mb-4">비밀번호 관리자</h3>
              <img
                className="m-auto"
                src={pmImage}
                alt="다양한 로고에 둘러싸인 청록색 금고 사진"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
