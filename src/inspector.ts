import path = require("path");
import * as vscode from 'vscode';

export class InspectorProvider implements vscode.TreeDataProvider<InspectorItem>{
  constructor(private context: vscode.ExtensionContext) {
    vscode.window.onDidChangeActiveTextEditor(() => this.onActiveEditorChanged());
    vscode.workspace.onDidChangeTextDocument(e => this.onDocumentChanged(e));
    console.log(`Active file: "${vscode.window.activeTextEditor?.document.uri}"`);
  }
  private onActiveEditorChanged(): void {
    if (vscode.window.activeTextEditor) {
      if (vscode.window.activeTextEditor.document.uri.scheme === 'file') {
        const enabled = vscode.window.activeTextEditor.document.languageId === 'javascript';
        console.log(`Activate file: ${vscode.window.activeTextEditor.document.uri}`);
      }
    } else {
      console.log(`Activate document is not file!!!`);
    }
  }

  private onDocumentChanged(changeEvent: vscode.TextDocumentChangeEvent): void {
    console.log(`Document "${changeEvent.document.uri}" changed!`);
  }

  getTreeItem(element: InspectorItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: InspectorItem | undefined): vscode.ProviderResult<InspectorItem[]> {
    return Promise.resolve([]);
  }

}

class InspectorItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly description: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = this.label;
    this.description = this.description;
  }

  iconPath = {
    light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
    dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
  };
}