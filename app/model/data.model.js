module.exports = mongoose => {
    const schema = mongoose.Schema(

        {
            nama_penyakit: String,
            deskripsi: String,
            gejala: String,
            cara_mengatasi: String,
            gambar: String,
        }, {
            timestamps: true,
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;

        return object;
    });

    return mongoose.model("gejala", schema);
};