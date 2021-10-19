const notesCtrl = {};

const Note = require("../models/Notes")

notesCtrl.renderNoteForm = (req, res) => {
    // res.send("ADD NOTAS");
    res.render("notes/new-note");
};

notesCtrl.createNewNote = async (req, res) => {
    // res.send("criar notas");
    const { title, description } = req.body;
    // console.log(title, description);
    // const newNote = new Note({title: title, description: description}
    const newNote = new Note({ title, description });

    newNote.user = req.user.id;

    await newNote.save();
    // res.send("Salva com sucesso");
    req.flash("success_msg", "Note Added Seccessfully");
    res.redirect("/notes");
};

notesCtrl.renderNotes = async (req, res) => {
    // res.send("Render Notes");
    const notes = await Note.find({user: req.user.id});

    console.log(req.user);

    res.render("notes/all-notes", { notes, nameUser: req.user.name});
};

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    // const note = await Note.find({ user: req.user.id });
    // res.send("Render Edit Form");
    res.render("notes/edit-note", { note })
};

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    // res.send("Update Note");
    req.flash("success_msg", "Note Update Seccessfully");
    res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
    // console.log(req.params.id)
    await Note.findByIdAndDelete(req.params.id);
    // res.send("Delete Note" + req.params.id);
    req.flash("success_msg", "Note Deleted Seccessfully");
    res.redirect("/notes");
};

module.exports = notesCtrl;