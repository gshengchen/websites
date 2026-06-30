# TLS

TLS 中文译名是传输层安全。

## 1.1. 注册一个域名

如果已经注册有域名了可以跳过。 TLS 需要一个域名，域名有免费的和有付费的，注册好域名之后务必记得添加一个 A 记录指向你的 VPS!
以下假设注册的域名为 mydomain.me，请将之替换成自己的域名。

## 1.2. 证书生成

TLS 是证书认证机制，所以使用 TLS 需要证书，证书也有免费付费的，同样的这里使用免费证书，证书认证机构为 Let's Encrypt。 证书的生成有许多方法，这里使用的是比较简单的方法：使用 acme.sh 脚本生成，本部分说明部分内容参考于acme.sh README。
证书有两种，一种是 ECC 证书（内置公钥是 ECDSA 公钥），一种是 RSA 证书（内置 RSA 公钥）。简单来说，同等长度 ECC 比 RSA 更安全,也就是说在具有同样安全性的情况下，ECC 的密钥长度比 RSA 短得多（加密解密会更快）。但问题是 ECC 的兼容性会差一些，Android 4.x 以下和 Windows XP 不支持。只要您的设备不是非常老的老古董，强烈建议使用 ECC 证书。以下将给出这两类证书的生成方法，请大家根据自身的情况自行选择其中一种证书类型。证书生成只需在服务器上操作。

### 1.2.1 安装 acme.sh

执行以下命令，acme.sh 会安装到 ~/.acme.sh 目录下：

~~~linux
 curl  https://get.acme.sh | sh
 source ~/.bashrc //确保脚本所设置的命令别名生效
~~~

### 1.2.2. 使用 acme.sh 生成证书

* 证书生成

执行以下命令生成证书：
以下的命令会临时监听 80 端口，请确保执行该命令前 80 端口没有使用

~~~linux
sudo ~/.acme.sh/acme.sh --issue -d mydomain.me --standalone -k ec-256
~~~

说明：
-k 表示密钥长度，后面的值可以是 ec-256 、ec-384、2048、3072、4096、8192，带有 ec 表示生成的是 ECC 证书，没有则是 RSA 证书。在安全性上 256 位的 ECC 证书等同于 3072 位的 RSA 证书。

* 证书更新

由于 Let's Encrypt 的证书有效期只有 3 个月，因此需要 90 天至少要更新一次证书，acme.sh 脚本会每 60 天自动更新证书。也可以手动更新。

* 手动更新 ECC 证书

~~~linux
sudo ~/.acme.sh/acme.sh --renew -d mydomain.com --force --ecc
~~~

* RSA 证书则执行：

~~~linux
sudo ~/.acme.sh/acme.sh --renew -d mydomain.com --force
~~~

### 1.2.3. 安装证书和密钥

* ECC 证书

将证书和密钥安装到 /etc/v2ray 中：

~~~linux
sudo ~/.acme.sh/acme.sh --installcert -d mydomain.me --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key --ecc
~~~

* RSA 证书

~~~linux
sudo ~/.acme.sh/acme.sh --installcert -d mydomain.me --fullchainpath /etc/v2ray/v2ray.crt --keypath /etc/v2ray/v2ray.key
~~~

## 1.4. 验证

要是有个可靠的方法来验证是否正常开启 TLS 无疑更令人放心。 验证的方法有很多，其中 Qualys SSL Labs's SSL Server Test。
打开 Qualys SSL Labs's SSL Server Test，在 Hostname 中输入你的域名，点提交，过一会结果就出来了。 