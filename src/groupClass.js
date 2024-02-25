export class Group {
  constructor(groupid, groupname, groupcolor) {
    this.collection = [];
    this.groupname = groupname;
    this.groupcolor = groupcolor;
    this.groupid = groupid;
    // console.log("Group created with name: " + this.groupname);
  }

  setGroupname(groupname) {
    this.groupname = groupname;
  }

  setGroupcolor(groupcolor) {
    this.groupcolor = groupcolor;
  }

  getGroupname() {
    return this.groupname;
  }

  getGroupcolor() {
    return this.groupcolor;
  }

  displayGroupInfo() {
    return {
      groupname: this.groupname,
      groupcolor: this.groupcolor,
    };
  }

  editGroup() {
    return {
      groupname: this.groupname,
      groupcolor: this.groupcolor,
    };
  }

  getGroupid() {
    return this.groupid;
  }

  setGroupid(groupid) {
    this.groupid = groupid;
  }

  addNote(note) {
    this.collection.push(note);
  }

  deleteNote(index) {
    this.collection.splice(index, 1);
  }

  getCollection() {
    return this.collection;
  }

  clearCollection() {
    this.collection = [];
  }

  editCollection() {
    return this.collection;
  }

  displayCollection() {
    return this.collection;
  }

  removeFromGroup() {
    this.groupid = null;
  }

  isInGroup() {
    return this.groupid !== null;
  }

  addToGroup(task) {
    this.groupid = task.groupid;
  }




}
