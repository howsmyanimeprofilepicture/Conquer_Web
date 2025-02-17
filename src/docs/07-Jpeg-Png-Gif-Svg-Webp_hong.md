---
sidebar_position: 14
---
# 1. 벡터 vs 래스터

### 1.1. 래스터(비트맵)

- 픽셀들이 모여 이미지를 구성하는 방식
- 용량이 매우 큼
- 크기를 확대할 경우 이미지 깨짐 발생
- jpg, png, gif, bmp



### 1.2. 벡터

- 크기 변경에 따른 이미지 깨짐이 없음
- 컬러의 자연스러운 변화나 세밀한 그림을 표현하기 어려움
- 이미지를 구성하는 객체가 많아질수록 그래픽 처리 시간이 많이 소모됨
- svg가 대표적인 벡터 이미지



# 2. 확장자별 이미지 타입 알아보기

### 2.1. jpg

- Joint Photographic Experts Group의 약어
- 넓은 범위의 색을 지원하여 카메라와 스캐너에 많이 쓰인다.
- 그러나 손실압축 형식이기 때문에 디테일은 조금 희생된다. 대신 파일 크기가 작다.



### 2.2. png

- 웹 용으로 많이 추천되는 형식이다.
- Portable Network Graphics의 약어이다.
- 다양한 색과 투명 백그라운드를 지원한다.
- 무손실 압축이어서 이미지 디테일의 손실이 전혀 없다.
- 즉  jpg보다 질적으로 우수하고 파일크기는 작다.



### 2.3. svg

- Scalable Vector Graphics
- 웹에서 표현가능한 스크립트가 가능한 다목적 벡터 포맷이다.
- 애니메이션이 구현 된다.



### 2.4. gif

- Graphics Interchange Format
- 색의 수가 제한된다.
- 투명 배경 지원한다.
- 애니메이션을 지원한다.



### 2.5. WebP

- 구글에서 만든 이미지 포맷이다.

- gif, jpg, png의 특성을 모두 가지고 있다.

- 즉 손실압축(jpg)과 비손실압축(png, gif)를 모두 지원한다.

- 손실 압축을 사용할 경우 jpg보다 크기가 30% 더 작다

- 비손실 압축을 사용할 경우 png보다 20~30% 파일 크기가 더 작아진다.

  





출처

https://namu.wiki/w/WebP

http://www.snpo.kr/bbs/board.php?bo_table=npo_aca&wr_id=2926&sfl=wr_14&stx=%EC%9D%B4%EB%AF%B8%EC%A7%80
