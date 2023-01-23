function filterApiData(apiData, mandatoryKeys) {
  let result = apiData.filter((entry) => {
    return mandatoryKeys.every((currentKey) =>
      Object.keys(entry).includes(currentKey)
    );
  });

  return result;
}
