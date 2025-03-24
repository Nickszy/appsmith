export default {
	data_tableonRowSelected() {
		// 将选中的行的 SEQ 值存入 appsmith.store
		const selectedSeq = data_table.selectedRow["SEQ"];
		storeValue("seq", selectedSeq);
		console.log(selectedSeq);
		console.log(appsmith.store["seq"]);
	}
}
