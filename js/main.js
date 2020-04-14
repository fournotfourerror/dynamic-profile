fetch("data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	profileInfo(data.profiles);
}).catch(e=>{
	console.error("Error");
})

var parent=document.getElementById("root");
var profileInfo=info=>{
	info.map((i,index)=>{
		var child= document.createElement("article");
		child.classList.add("child");

		// Name
		var name=document.createElement("h2");
		name.textContent=i.profileInfo.name;
		name.style.color="#588ae1";
		name.style.textShadow="3px 3px 3px #ddd";
		child.append(name);

		// Email
		var email=document.createElement("a");
		email.textContent=i.profileInfo.email;
		email.href="mailto:"+i.profileInfo.email;
		email.classList.add("email");
		child.append(email);

		// Mobile
		var mobile=document.createElement("a");
		mobile.textContent=i.profileInfo.mobile;
		mobile.href="tel:"+i.profileInfo.mobile;
		mobile.classList.add("mobile");
		child.append(mobile);

		var button=document.createElement("a");
		button.classList.add("btn");
		button.href="resume.html?id="+index;
		button.textContent="view profile";
		child.append(button);

		parent.append(child);
		// console.log(i.profileInfo.mobile);
	})
}