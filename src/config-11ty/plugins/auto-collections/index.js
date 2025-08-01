// TODO: import this dynamically from globalSettings probably
const autoTagNameDico = {
    pages: 'page',
    articles: 'article',
    people: 'person',
    organizations: 'organization'
}

export const tags = (data) => {
	data.lang;

	const fileMainDir = data.page.filePathStem
		.replace(/^\/+/, '') // Remove leading slashes
		.split('/')[0]; // Get the first directory

	const col = autoTagNameDico[fileMainDir] || fileMainDir;
	const autoTags = [
		fileMainDir,
		col,
		`collection:${fileMainDir}`,
		...(data.lang ? [
			data.lang,
			`lang:${data.lang}`,
			`${data.lang}:${fileMainDir}`,
		] : []),
	]
	// console.log({data})
	const tagsList = [...(data.tags || []), ...autoTags]
	// remove duplicates
	const uniqueTags = [...new Set(tagsList)];
	
	return uniqueTags;
}

export default async function(eleventyConfig, pluginOptions) {
    eleventyConfig.versionCheck(">=3.0.0-alpha.1");

	for (const [key, value] of Object.entries(autoTagNameDico)) {
		eleventyConfig.addCollection(key, function (collectionsApi) {
			return collectionsApi.getAllSorted().reverse().filter(function (item) {
				const tags = item.data.tags || [];
				const fileMainDir = item.page.filePathStem
					.replace(/^\/+/, '') // Remove leading slashes
					.split('/')[0]; // Get the first directory
	
				return fileMainDir === key || tags.includes(key)
			});
		});
		eleventyConfig.addCollection(value, function (collectionsApi) {
			return collectionsApi.getAllSorted().reverse().filter(function (item) {
				const tags = item.data.tags || [];
				const fileMainDir = item.page.filePathStem
					.replace(/^\/+/, '') // Remove leading slashes
					.split('/')[0]; // Get the first directory
	
				return fileMainDir === value || tags.includes(value)
			});
		});
	}
}