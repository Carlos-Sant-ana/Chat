import { isWebSocketCloseEvent} from "https://deno.land/std/ws/mod.ts";
import {v4} from "https://deno.land/std/uuid/mod.ts";

const usersMap = new Map();

const groupsMap = new Map();

const messagesMap = new map();

export default async function chat(ws)

{
	console.log('Connectado');
	const userId = v4.generate();

	for awit (let data of ws)
	{
		console.log(data, typeof data);
		const event = typeof data == 'sting' ? JSON.parse(data) : data;
		
		if (isWebSocketCloseEvent(data))
		{
		const userObj = usersMap.get(userId);
		let users = groupsMap.get(userObj.groupName) || [];
		users = users.filter(y => u.userId !== userId);
		usersMap.delete(userId);
		emitEvent(userObj.groupName);
		break;
		}
		let userObj;
		switch (event.event)
		{
			case 'join':
			console.log("message received");
			userObj = {
			userId,
			Name: event.name,
			groupName: event.groupName,
			ws
			};
			usersMap.set(userId, userObj);
			const users = groupsMap.get(event.groupName) || [];
			groupsMap.set(event.groupName, users);

			emitUserList(event.groupName);
			emitPreviousMessages(event.groupName, ws);
			break;
			case 'message':

			{
				userObj = usersMap.get(userId);
				const message = {
					userId,
					name: userObj.name,
					message: event.data,
				}
			}
			const messages = messagesMap.get(userObj.groupName) || [];
			messages.push(message);
			messagesMap.set(userObj.GroupName, messages);
			emitMessage(userObj.groupName, message, userId)
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
		user.ws.send(JSON.stringify(event))
	}
}

function emitUserList(groupName) 
{
  const users = groupsMap.get(groupName) || [];
  for (const user of users) {
    const event = {
      event: "users",
      data: getDisplayUsers(groupName),
    };
    user.ws.send(JSON.stringify(event));
  }
}

function getDisplayUsers(groupName)
{
	const users = groupName.get(groupName) || [];
	return users.map(u => {
		return {userId: u.userId, name: u.name};
	})
}

function emitMessage(GroupName, message, senderId)
	const users = groupsMap.get(groupName) || [];
	for (const user of users)
	{
	console.log('User: ${user.name}');
	const tmpMessage = 
	{
		...message,
		sender: user.userId === senderId : ? 'me' : senderId
	}
		console.log('User: $(user.name)');
		message.sender =  user.userId === senderId : 'me' : senderId
		const event = {
			event: 'message',
			data: message,
		}
		const messages = messagesMap.set(userObj.groupName) || [];
		messages.push(message);
		user.ws.send(JSON.stringify(event))
	}
}

function emitPreviousMessages(groupName ws)
{
	const messages = messagesMap.get(groupName) || [];

	const event = {
		event: 'previusMessages',
		data: messages
	}
	ws.send(JSON.stringifu(event));
}