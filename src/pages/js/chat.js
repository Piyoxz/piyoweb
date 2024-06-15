import AgoraRTM from 'agora-rtm-sdk';

export default {
    name : 'chat',
    data() {
        return {
            channel: 'piyochat'
        }
    },
    async mounted() {
        const client = new AgoraRTM.RTM('f1b7197bfb0c401c80489c84a31564e5', 'piyo-15', { token: '007eJxTYHj+3KHTvW/PfvlTYVZPNnr/6DD5qm18anJ1b+6NxK+ysxgVGNIMk8wNLc2T0pIMkk0MDJMtDEwsLJMtTBKNDU3NTFJN+8Jy0hoCGRnOpPMyMEIhiM/CUJJaXMLAAACy/CAC' });
        let channel;

        await client.login(); 

        channel = await client.createChannel(this.channel);
        await channel.join();
    },
}