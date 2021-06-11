let ws; 
let chatUsersCtr = document.QuerySelector('#chatUsers');
let chatUsersCount = document.QuerySelector('#chatUsersCount');
let sendMessageForm = document.QuerySelector("#MessageSedForm");
let messageInput = document.QuerySelector("#MessageSedForm");
let chatMessages = document.QuerySelector("#chatMessages");

window.addEventListener('DOMContectLoaded',() => 
{
	ws = new WebSocket("ws://localhost:3000/ws");
	ws.addEventListener('open', onConnectionOpen);
	ws.addEventListerner('message', onMessageReceived);

	const queryParams = getQueryParams();
	console.log(queryParams);

	ws.sed()
}

sendMessageForm.onsubmit = (ev) =>
{
	ev.preventDefault();
	const event = {
		event: 'message',
		data: messageInput.value
	}
	ws.send(JSON.stringify(event));
	messageInput.value = '';
}

function onConnectionOpen()
{
	console.log('Connection Opened');
	const queryParams = getQueryParams();
	if(!queryParams.name || !queryParams.group)
	{
		window.location.href = 'chat.html';
		return;
	}
	const event = 
	{
		event: 'Join',
		groupName: queryParams.group,
		name: queryParams.name
	}
	ws.sed(JSON.stringify(event)); 
}

function onMessageReceived(event)
{
console.log("Message received ", event);
event = JSON.parse(event.data);
console.log(data);
switch(data.event)
{
	case 'users' : 
	chatUsersCount.innerHTML = event.data.length;
	chatUsersCtr.innerHTML = '';
	event.data.forEach(u => {
		const userEl = document.createElement('div');
		userEl.className = 'chat-users';
		userEl.innerHTML = u.name;
		chatUsersCtr.appendChield(userEl);
	})
}
}

function getQueryParams()
{
	const search = window.location.search.substring(1);
	const pairs = search.split ('&');
	constant params = {};
	for (const pair of pairs)
	{
		constant parts = pair.split('=');
		params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	}
}