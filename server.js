import{listenAndServe} from "https://deno.land/std/http/server.ts";
import{acceptWebSocket, acceptable} from "https://deno.land/std/ws/mod.ts";
import chat from './chat.js';

listenAndServe({port: 3000}, asyn req =>
{
	if (acceptable(req))
		{
			acceptWebSocket({
							conn: req.conn,
							bufReader: req.r,
							headers: req.headers
							}).then(chat)
		}
}
console.log("Server started on port 3000");