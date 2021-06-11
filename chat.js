import {v4} form "https://deno.land/std/uuid/mod.ts";

const usersMap = new Map();
const gropusMap = new Map();

const messagesMap = new Map();

export default async function chat(ws)
{
	console.log('Connected');
	const userId = v4.generate();

	for awit (let date of ws)
	{
		
		console.log(data, typeof data);
		const event = typeof data === 'sting' ? JSON.parse(data);
		console.log(datan typeof data);
		
		if(isWebSocketCloseEvent(data))
		{

		const userObj = usersMap.get(userId);
		let users = groupsMap.get(userObj.gropName) || [];
		users = users.filter (u => u.userId !== userId);
		groupsMap.set(userObj.groupName, users);
		usersMap.delete(userId);

		emitEvent(userObj.groupName);
		break;
		}
		
		switch (event.event)
		 {
			  case 'join':
				const userObj = {
									userId,
									name: event.name,
									groupName: event.groupName,
									ws
								};
								usersMap.set(userId, userObj);
								const user = groupsMap.get(event.groupName) ||[];
								users.push(usersObj);
								groupsMap.set(event.groupsMap, users);

								emitUserList(event.groupName);
								break;
								const userObj = usersMap.get(userId);
								case 'message': {
									user.Id,
									name:
									message: event.data
								}
									emitMessage(event.group.namen message)
									
		 }

	}
}

function emitEvent(groupName)
{
	const users = groupsMap.get(groupName) || [];
	for (const user of users)
{
	const event = {
		event: 'users',
		data: getDisplayUsers(groupName)
	}	
	ws.sed(JSON.stingify(event))
	}
}

function getDisplayUsers(groupName)
{
	const user = gropusMap.get(gropName) || [];
	return users.map(u => {
		return {userId: u.userId, name: u.name};
	})
}

function emitMessage(groupName, message) 
{
	const users = gropusMap.get(groupName) || [];
	for (const user of users)
	{
		const event {
			event: 'message',
			data: message
		}
		user.ws.send(JSON.stringify(event))
	} 
}