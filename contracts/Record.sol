pragma solidity >=0.4.21 <0.7.0;

contract Record{
	//smart contract for record
	string recordHash;

	//read
	function set(string  memory _recordHash)public{
		recordHash=_recordHash;
	}
	//write
	function get()public view returns(string memory){
		return recordHash;
	}
}