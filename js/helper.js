exports.getSlang = (title) => title.replace(/[^0-9a-z ]/gi, '').trim().replace(' ', '-');

exports.getDate = (daysOffset = 0) => {
    const offsetDate = new Date();
    offsetDate.setDate(offsetDate.getDate() + daysOffset)

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return offsetDate.toLocaleDateString("en-GB", options);
}