import { submitAction } from "@/actions/form";   // importing submitAction function from action/form
// we can make this compponent "use client" stil the submitAction or the form component will be as "use server"
// separet component type for security and data safe reason 

export default function Home() {

  return (
<div>
  <form action={submitAction}>
    <div>
      {/* <label htmlFor="name">Name</label> */}
      <input name="name" id="name" type="text"  className="text-black"/>
    </div>
    <div>
      {/* <label htmlFor="add">Address</label> */}
      <input name="add" id="add" type="text"  className="text-black"/>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</div>
  );
}
