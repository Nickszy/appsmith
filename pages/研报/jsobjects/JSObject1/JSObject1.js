export default {
	data_tableonRowSelected() {
		// 将选中的行的 SEQ 值存入 appsmith.store
		const selectedSeq = SelectQuery.data[0]["SEQ"];
		storeValue("seq", selectedSeq);
	}
}
