let data = {
	username: "edm00se", // No leading @ here
	homeLabel: "edm00se.codes",
	homeUrl: "https://edm00se.codes/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;