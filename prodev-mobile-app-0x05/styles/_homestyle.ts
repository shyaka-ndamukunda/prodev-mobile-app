import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchGroup: {
    backgroundColor: 'black',
    padding: 20,
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 20
  },
  searchControlGroup: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  searchFormText: {
    fontWeight: 'bold'
  },
  searchControl: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#34967C',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  filterGroup: {
    flexDirection: 'row',
    columnGap: 20,
    paddingHorizontal: 15,
    marginTop: 15
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  paginationContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    padding: 15,
    borderRadius: 10
  },
  showMoreButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export { styles }