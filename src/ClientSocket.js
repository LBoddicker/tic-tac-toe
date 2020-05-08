import io from 'socket.io-client'
let ClientSocket = io("http://localhost:5000/")
export default ClientSocket;