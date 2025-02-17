---
sidebar_position: 9
---


# Header





https://luckyyowu.tistory.com/346

https://xn--xy1bk56a.run/axios/guide/api.html#%EA%B5%AC%EC%84%B1-%EC%98%B5%EC%85%98

## 0. 시작하기 앞서

- 웹은 결국 클라이언트에서 요청을 보내고, 그에 대해 응답을 서버가 보내는 구조이다.

- 기본적으로 이렇게 서버와 클라이언트가 주고받는 **요청**과 **응답**은 **시작줄**과 **헤더**와 **본문**으로 구성되어 있다.

  

![undefined](https://cdn.filestackcontent.com/CEYBedcTv610MRZDvpTI)



- 웹을 개발하고 이해하는 것에 있어 HTTP헤더를 이해하는 것은 매우 중요하다 할 수 있다.
- 프론트는 결국 리퀘스트 헤더와 바디를 보내는 앱이고, 백엔드는 리퀘스트를 받아 그에 맞는 리스폰스 헤더와 바디를 보내는 앱이기 때문이다.





## 1. 공통 헤더

- 요청과 응답에 모두 사용되는 헤더

- Content 시리즈는 엔티티 헤더라고 한다.

  #### 	

#### 	1.1. Date

HTTP 메시지가 만들어진 시각을 담은 헤더이다. 

(자동으로 만들어진다.)

> `Date: Sat, 29 May 2021 00:00:00 GMT`



#### 1.2. Connection

> Connection: keep-alive

HTTP/2를 사용하지 않는다면 보통 HTTP/1.1을 사용하게 된다.

기본값은 keep-alive인데... 사실상 **아무 의미도 없다**고 한다... 결국 HTTP/2에서는 걍 없어져 버렸다.



#### 1.3. Cache-Control

매우 중요하고 알아두어야 할 헤더



#### 1.4. Content-Length

**요청**과 **응답** 메시지의 **본문 크기**를 바이트 단위로 표시해줍니다. 메시지 크기에 따라 **자동**으로 만들어집니다.

> Content-Length: 52



#### 1.5. Content-Type

> Content-Type: text/html; charset=utf-8

- 컨텐츠의 타입(MIME)과 문자열 인코딩(utf-8 등등)을 명시할 수 있습니다. 
- 조금 뒤에 나오는 **Accept** 헤더, **Accept-Charset** 헤더와 대응됩니다. 
- 위에 예시로 든 헤더는 현재 메시지 내용이 text/html 타입이고 문자열은 utf-8 문자열임을 알려줍니다.

- 프런트엔드에서 서버로 데이터를 보낼 때는 text/html 이런 것 대신 www-url-form-encoded나 multipart/form-data같은 게 Content-Type이 됩니다.



#### 1.6. Content-Language

- **사용자의 언어**를 뜻합니다.

- 요청이나 응답이 무슨 언어인지와는 관련 없습니다. 예를 들어 한국 사람한테 일본어를 가르치는 사이트일 경우, 페이지 언어는 일본어더라도 Content-Language는 ko-KR일 수 있습니다.



#### 1.7. Content-Encoding

> Content-Encoding: gzip, deflate

- Content-Encoding은 컨텐츠 압축된 방식입니다. 
- 응답 컨텐츠를 br, gzip, deflate 등의 알고리즘으로 압축해서 보내면, 브라우저가 알아서 해제해서 사용합니다. 
- 이 외에도 다양한 압축 알고리즘이 존재합니다. 
- 컨텐츠 용량이 줄어들기 때문에 압축을 권장합니다. 
- 요청이나 응답 전송 속도도 빨라지고, 데이터 소모량도 줄어들기 때문에 가능하면 압축해두세요.







## 2. 요청 헤더

#### 2.1. Host

- Host란 **요청의 대상이 되는 서버의 도메인 + 포트네임**을 말한다.

> Host: www.zerocho.com

- Host 헤더는 반드시 하나가 존재해야 한다.

- 위 예시는 포트번호가 생략되었는데
- 포트번호가 생략되면 http의 경우 80번, https의 경우 443번으로 할당된다.

#### 2.2. User-Agent

- 현재 사용자가 어떤 클라이언트(**운영체제**와 브라우저 같은 것)를 이용해 요청을 보냈는지 나옴.


> User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36

- 근데 그대로 믿어서는 안 된다고 한다. 
- User-Agent는 조작이 가능하기 때문이다.

#### 2.3. Accept

- Accept 헤더는 요청을 보낼 때 **<u>서버에 이런 타입(MIME)의 데이터를 보내줬으면 좋겠다</u>**고 명시할 때 사용한다

- 

- >  Accept: text/html

- 이와 같은 형식을 보냈다면 서버에 html형태의 응답을 요구한 것이다.

- >Accept: image/png, image/gif
  >Accept: text/*

- 콤마로 여러 타입을 동시에 적어줄 수도 있고, *(와일드카드)로 "텍스트이기만 하면 돼"라고 적어줄 수도 있다.



그외에도 **Accept-Encoding, Accept-Charset, Accept-Language** 등이 있다.

> Accept-Charset: utf-8
> Accept-Language: ko, en-US
> Accept-Encoding: br, gzip, deflate

Charset은 문자 인코딩(UTF-8 등)을 명시하는 부분이고, Language는 원하는 언어, Encoding은 원하는 컨텐츠 압축 방식이다.

뭘 적어야할지 모르겠다면 *(와일드카드)를 적거나, 그냥 브라우저가 알아서 설정해서 보내는 Accept를 사용하면 된다.



공통 헤더의 **Content 시리즈**와 대응된다. 

>  요청 헤더에 적힌 Content는 요청 본문의 형식에 대해 다루고, 요청헤더의 Accept는 서버로부터 응답받고자 하는 데이터의 형식을 의미한다. 
>
>  즉  요청측에서 **Accept**로 원하는 형식을 보내면, 서버가 그에 맞춰 보내주면서 응답 헤더의 **Content**를 알맞게 설정할 것이다.







#### 2.4. Authorization

Authorization 헤더는 인증 토큰(JWT든, Bearer 토큰이든)을 서버로 보낼 때 사용하는 헤더이다.

 API 요청같은 것을 할 때 토큰이 없으면 거절당하기 때문에 이 때, Authorization을 사용하면 된다.

> Authorization: Bearer XXXXXXXXXXXXX

보통 Basic이나 Bearer같은 토큰의 종류를 먼저 알리고 그 다음에 실제 토큰 문자를 적어 보낸다.

![image](https://user-images.githubusercontent.com/75282888/120064920-ba262480-c0a9-11eb-98ac-3672aa97267e.png)

위 예시는 KAKAO API인데, 요청의 Authorization헤더에 API키를 담아서 보내라고 설명되어 있다.

#### 2.5. Origin

- POST같은 요청을 보낼 때, 요청이 어느 주소에서 시작되었는지를 나타낸다.

- 여기서 요청을 보낸 주소와 받는 주소가 다르면 [CORS 문제가](https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a) 발생할 수 있다. 



#### 2.6. Referer

> Referer: https://www.zerocho.com/category/JavaScript

- 이 페이지 이전의 페이지 주소가 담겨 있다. 
- 이 헤더를 사용하면 어떤 페이지에서 지금 페이지로 들어왔는지 알 수 있기 때문에 애널리틱스같은 데 많이 사용된다.
- 참고로 Referrer가 맞는 표현이다.



## 3. 응답 헤더

#### 3.1. Access-Control-Allow-Origin

- 프론트엔드 개발자들에게 악명 높은 헤더이다.
- 요청을 보내는 프론트 주소와 받는 백엔드 주소가 다르면 [CORS 에러](https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a)가 발생하는데
- **이 때 서버에서 응답 메시지 Access-Control-Allow-Origin 헤더에 프론트 주소를 적어 에러를 막을 수 있다.**
- 
![img](https://mdn.mozillademos.org/files/16753/preflight_correct.png)

> **Access-Control-Allow-Origin: www.naver.com**
>
> **Access-Control-Allow-Origin: ***

- 대충 직역하면 허용하고자 하는 요청인 것 같다.





- 프로토콜, 서브도메인, 도메인, **<u>포트</u>** 중 하나만 달라도 CORS 에러가 난다.

- 만약 주소를 일일이 지정하기 싫다면 *으로 모든 주소에 CORS 요청을 허용하면 된다. (물론 그만큼 보안이 취약해진다.)

- 유사한 헤더로 Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Headers 등이 있다. Request랑 Allow에서 Method 단수 복수 주의하자.



- CORS 요청 시에는 미리 **OPTIONS 주소**로 서버가 CORS를 허용하는지 물어본다.. 
- 이 때 **Access-Control-Request-Method**로 실제로 보내고자 하는 메서드를 알리고, 
- **Access-Control-Request-Headers**로 실제로 보내고자 하는 헤더들을 알린다.
- Allow 친구들은 Request에 대응되는 애들로, 서버가 허용하는 메서드와 헤더를 응답하는데 사용됩니다. 
- Request랑 Allow가 일치하면 CORS 요청이 이루어지는 것이다.





#### 3.2. Allow

Allow 헤더는 Access-Control-Allow-Methods랑 비슷하지만, **CORS 요청 외에도 적용**된다는 데에 차이가 있습니다. 즉 GET www.zerocho.com은 되고, POST www.zerocho.com은 허용하지 않는 경우, 405 Method Not Allowed 에러를 응답하면서 헤더로

> Allow: GET

를 같이 보내면 됩니다. GET 요청만 받겠다는 뜻입니다.





#### 3.3. Content-Disposition

- 응답 본문(body)을 브라우저가 어떻게 표시해야 할지 알려주는 헤더이다.

- **inline**인 경우 웹페이지 화면에 표시되고, **attachment**인 경우 다운로드된다.

> Content-Disposition: inline
> Content-Disposition: attachment; filename='filename.csv'

- 다운로드되길 원하는 파일은 attachment로 값을 설정하고, filename 옵션으로 파일명까지 지정해줄 수 있다.





#### 3.4. Location

300번대 응답이나 201 Created 응답일 때 어느 페이지로 이동할지를 알려주는 헤더이다.

> HTTP/1.1 302 Found
> Location: /

이런 응답이 왔다면 브라우저는 / 주소로 리다이렉트한다.





#### 3.5. Content-Security-Policy

- 다른 외부 파일들을 불러오는 경우, **차단할 소스**와 **불러올 소스**를 여기에 명시할 수 있습니다. 



- 하나의 웹 페이지는 다양한 외부 소스들을 불러옵니다. 이미지도 불러오고 script 태그로 자바스크립트 파일들도 불러옵니다. 폰트나 스타일, 아이프레임도 불러오고요. 
- 하지만 해커들에 의해 원하지 않는 파일을 불러오게 될 수도 있습니다. 악성 코드가 담겨져있는 파일이라면 큰 일이 나겠죠. XSS 공격 같은 것이 하나의 예시입니다. 이럴 때 Content-Security-Policy로 허용할 외부 소스만 지정할 수 있습니다.

> Content-Security-Policy: default-src 'self'
> Content-Security-Policy: default-src https:
> Content-Security-Policy: default-src 'none'

self로 지정하면 자신의 도메인의 파일들만 가져올 수 있습니다. www.zerocho.com에서는 www.zerocho.com/logo.jpg를 가져올 수 있지만, www.nero.com/logo.jpg는 못 가져오는 것이죠. 



https:로 지정하면 https를 통해서만 파일을 가져올 수 있게 됩니다. 'none'으로 지정하면 가져올 수 없습니다.

default-src는 모든 외부 소스에 대해 적용되는 것이고요. 각각 따로 지정할 수도 있습니다. 두 개나 세 개 정도만 추려서 지정할 수도 있고요.

> Content-Security-Policy: font-src 'self'; script-src https://www.zerocho.com 'unsafe-inline'; img-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'

font-src, script-src, img-src, style-src, object-src 등이 있고, 소스 옵션으로는 도메인이나, https:, 'unsafe-inline'(인라인 태그 허용), 'unsafe-eval'(eval 함수 허용) 등이 있습니다. 옵션들이 매우 많으므로 자세한 내용은 [여기](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) 서 참고하세요!





## 4. 알아둬야 할 HTTP 쿠키 & 캐시 헤더

![Show how a proxy cache acts when a doc is not cache, in the cache and fresh, in the cache and stale.](https://mdn.mozillademos.org/files/13771/HTTPStaleness.png)

- 캐싱이란 기본적으로 리소스(image나 html과 같은)의 재사용이다.

- 주어진 리소스의 복사본을 웹 캐시에 저장해두었다가, 필요할 때 꺼내서 쓰는 것이다.

- 매 접속마다 웹의 리소스들을 일일이 다운로드 한다면, 서버도 클라이언트도 상당한 부하가 걸릴 것이다.

- 대부분의 캐싱은 GET요청에서 진행된다.

  

  





#### 4.1. Cache-Control

많은 옵션들이 있지만, 자주 쓰이는 옵션만 알아봅니다.

먼저 아무것도 캐싱하지 않으려면

> **Cache-Control: no-store**

를 하면됩니다. 또는 no-cache, no-store, must-revalidate로 no 시리즈를 다 붙여줍니다.

> **Cache-Control: no-cache**

는 가장 많이 헷갈려하는 헤더 설정인데요. no-cache이지만 cache하지 말라는 뜻이 아닙니다!!! 모든 캐시를 쓰기 전에 서버에 이 캐시 진짜 써도 되냐고 물어보라는 뜻입니다.

> **Cache-Control: must-revalidate**

must-revalidate는 만료된 캐시만 서버에 확인을 받도록 하는 겁니다. no-cache랑 must-revalidate는 이름이 잘못 지어진 감이 있습니다.

> **Cache-Control: public 또는 private**

public이면 공유 캐시(또는 중개 서버)에 저장해도 된다는 뜻이고 private이면 브라우저같은 특정 사용자 환경에만 저장하라는 뜻입니다.

> **Cache-Control: public, max-age=3600**

max-age로 캐시 유효시간을 줄 수 있습니다. 초 단위이므로 위 예제에서는 1시간입니다. 1시간이 지나면 이 응답 캐시는 만료된 것으로 여겨집니다.

참고로 위의 옵션들은 혼합해서 써도 됩니다. no-store, no-cache, must-revalidate처럼 콤마로만 구분하면 되고요. 

Cache-Control을 응답 헤더라고 생각하실 수도 있는데, 요청 헤더로도 사용할 수 있습니다. 프론트 - 중개 서버 - 진짜 서버와 같은 구조인 경우에 중개 서버에 있는 캐시를 가져오지 않도록 하려면 요청 시부터 Cache-Control을 헤더로 넣어주곤 합니다.

#### 4.2. Age

Age 헤더는 캐시 응답 때 나타나는데, max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려줍니다. 위 예제에서 max-age= 3600을 설정한 경우, 1분이 지나면

> Age: 60

이 캐시 응답 헤더에 포함됩니다.

#### 4.3. Expires

Cache-Control과 별개로 응답에 Expires라는 헤더를 줄 수도 있습니다.

> Expires: Thu, 26 Jul 2018 07:28:00 GMT

응답 컨텐츠가 언제 만료되는지를 나타내며, Cache-Control의 max-age가 있는 경우 이 헤더는 무시됩니다.

#### 4.4. ETag

HTTP 컨텐츠가 바뀌었는지를 검사할 수 있는 태그입니다. 같은 주소의 자원이더라도 컨텐츠가 달라졌다면 ETag가 다릅니다. 예를 하나 들어봅시다.

GET www.zerocho.com의 응답 본문이 **안녕 제로초**이고 ETag 헤더 값이 12345라 칩시다. 만약 서버 컨텐츠(응답 본문)가 동일하다면 매번 GET www.zerocho.com을 할 때마다 ETag는 12345입니다. 그런데 **안녕 제로초**에서 **안녕 이태그**로 컨텐츠가 바뀌었다면 ETag 헤더 값도 34567로 바뀝니다. 그러면 서버가 클라이언트의 응답 내용이 달라졌구나를 깨닫게 되어 캐시를 지우고 새로 컨텐츠를 내려받을 수 있게 됩니다.

> Etag: W/"3bf2-wdj3VvN8/CvXVgafkI30/TyczHk"

#### 4.5. If-None-Match

서버보고 ETag가 달라졌는 지 검사해서 ETag가 다를 경우에만 컨텐츠를 새로 내려주라는 뜻입니다.

> If-None-Match: W/"3bf2-wdj3VvN8/CvXVgafkI30/TyczHk"

만약 ETag가 같다면 서버는 **304 Not Modified**를 응답해서 캐시를 그대로 사용하게 합니다.



##### * 쿠키

쿠키는 **브라우저에 저장**되는 작은 데이터 조각으로, 임시 데이터 보관 또는 웹페이지 개인화 등에 사용된다. 쿠키를 주기적으로 지우지 않으면 브라우저에 엄청나게 많은 쿠키들이 쌓여 있는 것을 보게 된다.



#### 4.6. Set-Cookie

서버에서 클라이언트(브라우저)한테 이런 이런 쿠키를 저장하라고 명령하는 응답 헤더입니다.

> Set-Cookie: 키=값; 옵션들

Set-Cookie: hello=zero면 hello라는 키에 값을 zero로 해서 보낼 수 있는거죠. 옵션들도 몇 개 알려드리겠습니다.

- Expires: 쿠키 만료 날짜를 알려줄 수 있습니다.
- Max-Age: 쿠키 수명을 알려줄 수 있습니다. Expires는 무시됩니다.
- Secure: https에서만 쿠키가 전송됩니다.
- HttpOnly: 자바스크립트에서 쿠키에 접근할 수 없습니다. XSS 요청을 막으려면 활성화해두는 것이 좋습니다.
- Domain: 도메인을 적어주면 도메인이 일치하는 요청에서만 쿠키가 전송됩니다. 가끔 도메인이 다른 쿠키들이 있는데, 이런 쿠키들은 써드 파티 쿠키로 여러분을 추적하고 있는 쿠키입니다. 구글이나 페이스북같은 곳이 써드 파티 쿠키를 적극적으로 사용합니다.
- Path: 패스를 적어주면 이 패스와 일치하는 요청 요청에서만 쿠키가 전송됩니다.

예를 들면 다음과 같이 가능합니다.

> Set-Cookie: zerocho=babo; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

쿠키는 XSS 공격과 CSRF 공격 등에 취약하기 때문에 HttpOnly 옵션을 켜두고, 쿠키를 사용하는 요청은 서버 단에서 검증하는 로직을 꼭 마련해두는 것이 좋습니다.

#### 4.7. Cookie

반대로 클라이언트가 서버한테 쿠키를 보내줄 때는 이 요청 헤더에 담아 보냅니다.

> Cookie: 키=값; 키=값;

서버는 이 쿠키 헤더를 파싱해서 사용하게 됩니다. 아까도 말했듯 CSRF 공격같은 것을 막기 위해서 반드시 서버는 쿠키가 제대로 된 상황에서 온 것인지 확인하는 로직을 갖춰야 합니다.

이렇게 캐시와 쿠키에 관련된 헤더를 알아봤습니다. 보통은 서버가 알아서 세팅하는 캐시와 쿠키를 사용하지만, 여러분이 수정해야할 때도 있습니다. 그 때 참조하시면 될 것 같습니다.

다음 시간에는 **X로 시작하는 헤더**들에 대해 알려드리겠습니다!











## 5. 알아둬야 할 HTTP X 헤더

- 앞에 붙은 X가 원래는 사용자정의헤더란 의미였다.

- 지금은 굳이 X를 붙이지 않아도되지만 일종의 관습이 돼서 여전히 다들 X를 붙인다.

- 그리고 몇몇 X헤더들은 사실상 표준 헤더에 가깝게 이용된다.

  

#### 5.1. X-Forwarded-For, X-Forwarded-Host, X-Forwarded-Proto

- 요청이 어디서부터 건너왔는지 알려주는 헤더입다. 
- 실제 세상에서는 클라이언트(요청) - 서버(응답)와 같은 2단 구조보다는 
- **클라이언트(요청) - 중개 서버 - 중개 서버 - 중개 서버 - ... - 최종 서버(응답)** 이런 **다단 구조**가 더 많다.

- 이 때 중개 서버를 거치면서 헤더들이 변조되고, 요청을 누가 보냈는지 애매해질 수 있는데, 

- **X-Forwarded 헤더 시리즈는 원래 요청이 누구였는지를 밝혀준다** (물론 이것도 조작할 수 있으니 완전히 믿어서는 안 된다.).

> X-Forwarded-For: 1.2.3.4, 5.6.7.8, 9.10.11.12 
> X-Forwarded-Host: www.zerocho.com
> X-Forwarded-Proto: https

- **For**는 현재까지 거쳐온 서버의 IP에 대한 정보를 가지고 있습니다. 
- 1.2.3.4가 원래 서버 아이피라면 나머지는 중개 서버 아이피가 됩니다. 
- Host는 원래 서버의 호스트명이고요. 
- Proto는 원래 서버의 프로토콜이 되죠.

- 사실 Forwarded 헤더가 표준 헤더입니다. 위 세 가지를 모두 처리할 수 있습니다.

> Forwarded: for=1.2.3.4; host=www.zerocho.com; proto=https; by=5.6.7.8, 9.10.11.12

#### 5.2. X-Frame-Options

**frame, iframe, object** 태그 안에서 페이지를 **렌더링하는 것을 막을 수 있다.** 

여러분의 사이트가 frame, iframe, object를 안 쓴다면

> X-Frame-Options: DENY

로 막아두는게 보안에 좋습니다. 클릭재킹(내가 무언가를 눌렀는데, 실제로는 그게 아니라 다른 게 눌리는 해킹 방법)을 막을 수 있다고 하네요. 만약 여러분의 사이트 자체를 iframe 등으로 불러오는 경우에는

> X-Frame-Options: SAMEORIGIN

으로 자신의 페이지를 불러오는 것은 허용할 수 있습니다.

특정한 사이트 불러오는 것만 허용하고 싶다면

> X-Frame-Options: ALLOW-FROM https://www.zerocho.com

와 같이 명시해주면 됩니다.

#### 5.3. X-Content-Type-Options

서버에서 보내온 Content-Type 헤더가 잘못 설정되었다고 생각하는 경우, 브라우저는 자체적으로 컨텐츠 타입을 추론합니다. 예를 들어 분명히 css파일인데 Content-Type 헤더가 text/html인 경우, 브라우저가 text/css로 추론할 수도 있다는 뜻입니다. 하지만 이런 임의적 행동은 예상치 못한 행동이기 때문에 위험할 수 있습니다. 그럴 때는

> X-Content-Type-Options: nosniff

헤더를 서버에서 보내주어, 브라우저가 서버가 보낸 컨텐츠타입을 따르게 강제할 수 있습니다.











