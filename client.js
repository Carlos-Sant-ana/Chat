let ws; 
let chatUsersCtr = document.querySelector('#chatUsers');

window.addEventListener('DOMContentLoaded', () =>
	{
		ws = new WebSocket('ws://localhost:3000/ws');
		ws.addEventListener('open', onConnectionOpen);
		ws.addEventListener('message', onMessageReceived);
	}
	);

sendMessageForm.onsubmit = (ev) => 
{
	ev.preventDefault();
	const event = {
		event: 'message',
		data: messageInput.value
	}
	ws.send(JSON.stringify(event));
	messageInput.value =  '';
}
	
function on ConnectionOpen()
{
	console.log('Connection Opened', event);
	const queryParams = getQueryParams();
	if(!queryParams.name || !queryParams.group)
	{
		window.location.href = 'chat.html';
		return;
	}
	
	const event = {
		event: 'join',
		groupName:
	}
	ws.send(JSON.stingify(event);

}

function onMessageReceived(event)
{
	console.log("Mensagem Recebida ", event);
	const data = JSON.parse(event.data);
	console.log(data);
	switch(event.event)
	{
		case 'users':
			chatUsersCtr.innerHTML = event.data.lenght;
			event.data.forEach(u => {
				const userEl = document.createElement('div');
				userEl.className = 'chat-user';
				userEl.innerHTML = u.name;
				chatUsersCtr.appendChild(userEl);

					setTimeout(() => {
					console.log("SetTimeout ");
						if(Math.floor(el.offsetHeight + el.scrollTop) === el.scrollHeight) {
						el.scrolltop = 10000000;
					}, 500)

					}
			})
			break;
			case 'message':
			appendMessage(event.data);
								setTimeout(() => {
					console.log("SetTimeout ");
						if(Math.floor(el.offsetHeight + el.scrollTop) === el.scrollHeight) {
						el.scrolltop = 10000000;
					}, 500)

					}
			break;

			case 'previousMessages':
				{
					event.data.forEach(appendMessage(event.data);
					const el = chatMessagesCtr;
					
					setTimeout(() => {
					console.log("SetTimeout ");
						if(Math.floor(el.offsetHeight + el.scrollTop) === el.scrollHeight) {
						el.scrolltop = 10000000;
					}, 500)

					}
					break;
				}
	}
}

function appendMessage(message)
{
				const messageEl = document.createElement('div');
				messageEl.className = 'message message-${eve.data.sender === 'me' ? 'to': 'from'}';
				messageEl.innerHTML = '
				${event.data.sender === 'me'} ? '' : '<h4>${event.data.name}</h4>'}
				<p class="message-text">${event.data.message</p>';
				chatMessagesCtr.appendChild(messageEl);
}

function getQueryParams()
{
	const serch = window.location.search.substring(1);
	const pairs = search.split('&');
	const params = {};
	for const parts = pair.split('=');
	{
	params[decodeURIComponet(parts[0])] = decodeURIComponet(parts[1]);
}
return params;
}
